const fs = require('fs-extra')
const path = require('path')

function handler(argv) {
  const componentName = argv.name
  const componentPath = path.format({ dir: `components/${componentName}`, name: componentName, ext: '.tsx' })
  const componentStylesPath = path.format({ dir: `components/${componentName}`, name: componentName, ext: '.styles.ts' })

  const componentTemplate = `
  import * as React from 'react'
  import styled from '@emotion/styled'
  import styles from './${componentName}.styles'
  // import { Название_компонента_из_нашей_библиотеки_компонентов } from '@asmy/core-design'

  const Origin${componentName} = props =>
    <div>
      { props.children }
    </div>

  const ${componentName} = styled(Origin${componentName})\`
    \${styles.base}
  \`

  export { ${componentName} }
  export default ${componentName}
  `

  const componentStylesTemplate = `
  import { css } from '@emotion/core'

  export default {
    base: css\`
      display: block;
    \`,
  }
  `

  fs.outputFile( componentPath, componentTemplate, (err) => {
    if (err) { throw err }
    console.log('\n-----------------------')
    console.log('Файл компонента был успешно создан! 🎉')
  })

  fs.outputFile( componentStylesPath, componentStylesTemplate, (err) => {
    if (err) { throw err }

    console.log('Файл стилей для компонента был успешно создан! 🎉')
    console.log('-----------------------')
  })
}

exports.command = 'create-component [name]'

exports.desc = 'Создать новый компонент'

exports.builder = {}

exports.handler = handler
