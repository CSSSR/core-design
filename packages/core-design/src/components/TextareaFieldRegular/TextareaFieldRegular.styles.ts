import { css } from '@emotion/core'

const wrapper = css`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

const floatLabel = css`
  position: absolute;
  pointer-events: none;
  user-select: none;
  left: 1rem;
  top: 1.5rem;
`

const isLabelActive = ({ active }: { active?: boolean }) =>
  active &&
  css`
    padding-left: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.1rem;
    top: 1px;
    left: 1px;
    background-color: #fff;
    width: calc(100% - 2rem);
    box-sizing: border-box;
  `

export { wrapper, floatLabel, isLabelActive }
