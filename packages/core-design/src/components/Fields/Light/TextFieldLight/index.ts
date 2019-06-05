import { TextFieldLight as UncontrolledTextFieldLight } from './TextFieldLight'

import { withFocusedState, withHoveredState } from '../../../../hocs'

export { TextFieldLight as UncontrolledTextFieldLight } from './TextFieldLight'

const TextFieldLight = withFocusedState()(withHoveredState()(UncontrolledTextFieldLight))

export { TextFieldLight }

export default TextFieldLight
