import { TextFieldRegular as UncontrolledTextFieldRegular } from './TextFieldRegular'
import { withFocusedState, withHoveredState } from '../../../../hocs'

export { TextFieldRegular as UncontrolledTextFieldRegular } from './TextFieldRegular'

const TextFieldRegular = withFocusedState()(withHoveredState()(UncontrolledTextFieldRegular))
export { TextFieldRegular }
export default TextFieldRegular
