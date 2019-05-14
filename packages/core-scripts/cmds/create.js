const path = require('path')
const spawn = require('cross-spawn')
const fs = require('fs-extra')
const { compile } = require('handlebars')

const FILES_TO_CREATE = [
  {
    path: './package.json',
    locals: ['name'],
  },
  './babel.config.js',
  './next.config.js',
  './pages/index.jsx',
  './pages/_app.jsx',
]

const pick = (source, ...fields) =>
  fields.reduce((acc, curr) => ({ ...acc, [curr]: source[curr] }), {})

function handler(argv) {
  console.log('Устанавливаются зависимости...')

  const cwd = process.cwd()
  const absoluteOutputPath = path.resolve(cwd, argv.dir)
  const basename = path.basename(absoluteOutputPath)

  const context = {
    name: basename,
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

    fs.outputFileSync(absTargetPath, renderedTemplate, { encoding: 'utf8' })
  }

  const installProcess = spawn.sync('npm', ['install'], {
    stdio: 'inherit',
    cwd: absoluteOutputPath,
  })

  if (installProcess.status !== 0) {
    process.exit(installProcess.status)
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
