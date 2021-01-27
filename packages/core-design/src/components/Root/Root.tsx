import * as React from 'react'
import { Global, ThemeProvider } from '@emotion/react'
import { normalize } from '../../styles/normalize'
import fonts from '../../styles/fonts'

import defaultTheme from '../../themes/default'
import { Theme as ThemeType } from '../../themes/types'

export interface Props {
  theme?: ThemeType
}

const Root: React.FC<Props> = (props) => (
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
