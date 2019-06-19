import * as React from 'react'
import { Global } from '@emotion/core'
import { normalize } from '../../styles/normalize'
import fonts from '../../styles/fonts'

import { ThemeProvider } from 'emotion-theming'
import defaultTheme from '../../themes/default'
import { Theme as ThemeType } from '../../themes/types'

export interface Props {
  theme?: ThemeType
}

const Root: React.FC<Props> = props => (
  <ThemeProvider theme={props.theme}>
    <Global styles={normalize} />
    <Global styles={fonts} />

    {props.children}
  </ThemeProvider>
)

Root.defaultProps = {
  theme: defaultTheme,
}

export { Root }
export default Root
