const path = require('path')
const spawn = require('cross-spawn')
const fs = require('fs-extra')
const { compile } = require('handlebars')
const inquirer = require('inquirer')

const { pick, getRepoNameByAddress, validateRepoAddress } = require('../utils')

async function handler(argv) {
  const cwd = process.cwd()
  const absoluteOutputPath = path.resolve(cwd, argv.dir)
  const basename = path.basename(absoluteOutputPath)

  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      default: basename,
      message: 'Как назвать директорию?',
    },
    {
      type: 'confirm',
      name: 'initRepo',
      message: 'Подключать удаленный репозиторий?',
    },
    {
      type: 'input',
      name: 'repoAddress',
      message: 'Введите адрес GitHub-репозитория (ssh):',
      when: ({ initRepo }) => initRepo,
      validate: value => {
        const errorMessage = [
          'Неправильно введен адрес репозитория, он должен быть такого формата:',
          'git@github.com:palmflip/example-nextjs-sample.git'
        ].join('\n')

        return validateRepoAddress(value) || errorMessage
      },
    },
  ])

  const FILES_TO_CREATE = [
    {
      path: './package.json',
      locals: ['name'],
    },
    {
      path: './next.config.js',
      locals: ['name', 'repoName'],
    },
    answers.initRepo && {
      path: './scripts/deploy.sh',
      mode: 0777 & ~process.umask(),
      locals: ['repoAddress'],
    },
    answers.initRepo && './.gitignore',
    './babel.config.js',
    './next.config.js',
    './pages/index.jsx',
    './pages/_app.jsx',
  ].filter(Boolean)

  const context = {
    name: answers.name,
  }

  if (answers.initRepo) {
    context.repoAddress = answers.repoAddress
    context.repoName = getRepoNameByAddress(answers.repoAddress)
  }

  for (const fileToCreate of FILES_TO_CREATE) {
    const targetFilePathPart = typeof fileToCreate === 'object' ? fileToCreate.path : fileToCreate
    const absTargetPath = path.resolve(absoluteOutputPath, targetFilePathPart)
    const templatePath = path.resolve(__dirname, '../templates', `${targetFilePathPart}.hbs`)

    const template = compile(fs.readFileSync(templatePath, { encoding: 'utf8' }))

    const renderedTemplate =
      typeof fileToCreate === 'object'
        ? template(pick(context, ...fileToCreate.locals))
        : template()

    const writeOptions = { encoding: 'utf8' }

    if (fileToCreate.mode) {
      writeOptions.mode = fileToCreate.mode
    }

    fs.outputFileSync(absTargetPath, renderedTemplate, writeOptions)
  }

  console.log('Устанавливаются зависимости...')

  const installProcess = spawn.sync('npm', ['install'], {
    stdio: 'inherit',
    cwd: absoluteOutputPath,
  })

  if (installProcess.status !== 0) {
    process.exit(installProcess.status)
  }

  if (answers.initRepo) {
    spawn.sync('git', ['init'], {
      stdio: 'inherit',
      cwd: absoluteOutputPath,
    })

    spawn.sync('git', ['remote', 'add', 'origin', answers.repoAddress], {
      stdio: 'inherit',
      cwd: absoluteOutputPath,
    })
  }

  console.log('\n-----------------------')
  console.log('🍺 Установка завершена!')
  console.log('-----------------------')
  console.log('Теперь можно перейти в директорию проекта и запустить dev-сервер для разработки:\n')
  console.log(`$ cd ${basename}`)
  console.log(`$ npm run dev\n`)
  console.log(
    'После того, как запустится сервер нужно открыть в браузере эту станицу: http://localhost:3000'
  )
  console.log('-----------------------')
}

exports.command = 'create [dir]'

exports.desc = 'Создать новый чистый проект'

exports.builder = {
  dir: {
    default: '.',
  },
}

exports.handler = handler
