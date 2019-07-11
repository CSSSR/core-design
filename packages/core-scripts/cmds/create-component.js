const fs = require('fs-extra')
const path = require('path')
const { compile } = require('handlebars')

function handler(argv) {
  const componentName = argv.name

  if (!componentName) {
    console.log('\n-----------------------')
    console.log('\n\x1b[31m', 'Введите название компонента', '\x1b[0m')
    console.log('\n-----------------------')
    throw ''
  }

  if (componentName[0] !== componentName[0].toUpperCase()) {
    console.log('\n-----------------------')
    console.log(
      '\n\x1b[31m',
      'Название компонента должно начинаться с заглавной буквы и быть написано в PascalCase',
      '\x1b[0m',
    )
    console.log('\n-----------------------')
    throw ''
  }

  const componentTemplatePath = path.resolve(
    __dirname,
    '../templates/components/Component',
    `Component.jsx.hbs`,
  )
  const componentStylesTemplatePath = path.resolve(
    __dirname,
    '../templates/components/Component',
    `Component.styles.js.hbs`,
  )
  const componentIndexTemplatePath = path.resolve(
    __dirname,
    '../templates/components/Component',
    `index.js.hbs`,
  )

  const componentTemplate = compile(fs.readFileSync(componentTemplatePath, { encoding: 'utf8' }))
  const componentStylesTemplate = compile(
    fs.readFileSync(componentStylesTemplatePath, { encoding: 'utf8' }),
  )
  const componentIndexTemplate = compile(
    fs.readFileSync(componentIndexTemplatePath, { encoding: 'utf8' }),
  )

  const componentPath = path.format({
    dir: `components/${componentName}`,
    name: componentName,
    ext: '.jsx',
  })
  const componentStylesPath = path.format({
    dir: `components/${componentName}`,
    name: componentName,
    ext: '.styles.js',
  })
  const componentIndexPath = path.format({
    dir: `components/${componentName}`,
    name: 'index',
    ext: '.js',
  })

  fs.outputFile(componentIndexPath, componentIndexTemplate({ componentName }), err => {
    if (err) {
      throw err
    }
    console.log('\n-----------------------')
    console.log('Файл index для компонента был успешно создан! 🎉')
  })

  fs.outputFile(componentPath, componentTemplate({ componentName }), err => {
    if (err) {
      throw err
    }
    console.log('Файл компонента был успешно создан! 🎉')
  })

  fs.outputFile(componentStylesPath, componentStylesTemplate(), err => {
    if (err) {
      throw err
    }

    console.log('Файл стилей для компонента был успешно создан! 🎉')
    console.log('-----------------------')
  })
}

exports.command = 'create-component [name]'
exports.desc = 'Создать новый компонент'
exports.builder = {}
exports.handler = handler
