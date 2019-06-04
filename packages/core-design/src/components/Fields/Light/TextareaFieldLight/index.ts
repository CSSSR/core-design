import { TextareaFieldLight as UncontrolledTextareaFieldLight } from './TextareaFieldLight'

import { withFocusedState, withHoveredState } from '../../../../hocs'

export { TextareaFieldLight as UncontrolledTextareaFieldLight } from './TextareaFieldLight'

const TextareaFieldLight = withFocusedState()(withHoveredState()(UncontrolledTextareaFieldLight))

export { TextareaFieldLight }

export default TextareaFieldLight
