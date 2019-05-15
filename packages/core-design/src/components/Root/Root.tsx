import * as React from 'react'
import { Global } from '@emotion/core'
import { normalize } from '../../styles/normalize'
import fonts from '../../styles/fonts'

import { ThemeProvider } from 'emotion-theming'
import defaultTheme, { Theme as ThemeType } from '../../themes/default'

export interface Props {
  theme?: ThemeType
}

const Root: React.FC<Props> = props => (
  <ThemeProvider theme={defaultTheme}>
    <Global styles={normalize} />
    <Global styles={fonts} />

    {props.children}
  </ThemeProvider>
)

Root.defaultProps = {
  theme: defaultTheme,
} as Props

export { Root }
export default Root
