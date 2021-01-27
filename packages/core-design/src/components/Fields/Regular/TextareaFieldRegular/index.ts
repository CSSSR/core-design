import { TextareaFieldRegular as UncontrolledTextareaFieldRegular } from './TextareaFieldRegular'

import { withFocusedState, withHoveredState } from '../../../../hocs'

export { TextareaFieldRegular as UncontrolledTextareaFieldRegular } from './TextareaFieldRegular'

const TextareaFieldRegular = withFocusedState()(
  withHoveredState()(UncontrolledTextareaFieldRegular),
)

export { TextareaFieldRegular }
export default TextareaFieldRegular
