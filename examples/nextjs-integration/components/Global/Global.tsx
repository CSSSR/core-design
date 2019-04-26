import { Global as EmotionGlobal, css } from '@emotion/core'

import { normalize, fonts } from '@asmy/core-design'

const globalStyles = css`
  ${normalize}
  ${fonts}
  html,
  body {
    margin: 0;
    padding: 0;
  }
`

const Global = () => <EmotionGlobal styles={globalStyles} />

export { Global }

export default Global
