import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { ThemeProps } from '../../themes/types'
import styles from './AnimatedButton.styles'

export interface Props {
  status: 'pending' | 'submitting' | 'success' | 'fail'
  type?: 'button' | 'submit'
  kind: 'secondary' | 'primary'
  className?: string
  children: React.ReactNode
  testId?: string
  successImgTestId?: string
  failImgTestId?: string
  submittingImgTestId?: string
}

function getStylesByStatusAndKind(props: Props & ThemeProps) {
  const { status, kind } = props

  switch (status) {
    case 'submitting':
      return css`
        ${styles.status.submitting}
        ${styles.themes[kind].status.submitting(props)}
      `

    case 'success':
      return css`
        ${styles.status.submitting}
        ${styles.status.success}
        ${styles.themes[kind].status.success(props)}
      `

    case 'fail':
      return css`
        ${styles.status.submitting}
        ${styles.status.fail}
        ${styles.themes[kind].status.fail}
      `

    default:
      return css`
        ${styles.base}
        ${styles.themes[kind].status.pending(props)}
      `
  }
}

const AnimatedButtonOrigin: React.FC<Props> = ({
  className,
  children,
  testId,
  successImgTestId,
  failImgTestId,
  submittingImgTestId,
  ...props
}) => (
  <div className={className}>
    <button {...props} data-testid={testId}>
      <span>{children}</span>
    </button>

    <svg
      className="progress-circle"
      width="70"
      height="70"
      viewBox="0 0 70 70"
      data-testid={submittingImgTestId}
    >
      <path
        d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z"
        strokeDasharray="204.245 204.245"
        strokeDashoffset="204.245"
      />
    </svg>

    <svg
      className="checkmark"
      width="70"
      height="70"
      viewBox="0 0 70 70"
      data-testid={successImgTestId}
    >
      <path d="m31.5,46.5l15.3,-23.2" strokeDasharray="27.80 27.80" strokeDashoffset="27.80" />
      <path d="m31.5,46.5l-8.5,-7.1" strokeDasharray="11.7 11.7" strokeDashoffset="11.7" />
    </svg>

    <svg className="cross" width="70" height="70" viewBox="0 0 70 70" data-testid={failImgTestId}>
      <path d="m35,35l-9.3,-9.3" />
      <path d="m35,35l9.3,9.3" />
      <path d="m35,35l-9.3,9.3" />
      <path d="m35,35l9.3,-9.3" />
    </svg>
  </div>
)

const AnimatedButton = styled(AnimatedButtonOrigin)<Props>`
  ${styles.base}
  ${styles.font}
  ${getStylesByStatusAndKind}
`

AnimatedButton.defaultProps = {
  status: 'pending',
  type: 'button',
  kind: 'primary',
}

export { AnimatedButton }

export default AnimatedButton
