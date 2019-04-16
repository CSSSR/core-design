import * as React from 'react'

import styled from '@emotion/styled'

const StyledHandle = styled.button`
  display: inline-block;
  box-sizing: border-box;
  height: 16px;
  width: 16px;
  background: #ffffff;
  background-image: linear-gradient(0deg, #d5e5ed 0%, rgba(255, 255, 255, 0.01) 97%);
  border: 1px solid #bcbac6;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.07), inset 0 -3px 0 0 rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  outline: none;
  cursor: pointer;
`

const StyledToggle = styled.div`
  & {
    display: inline-flex;
    box-sizing: border-box;
    width: 28px;
    height: 16px;
    background: #f3ffff;
    background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.14) 83%, rgba(0, 0, 0, 0) 100%);
    border: 1px solid #d8dfed;
    box-shadow: inset 0 -2px 0 0 #ffffff;
    border-radius: 112px;
  }

  ${StyledHandle} {
    position: relative;
    margin-top: -1px;
    margin-left: -1px;
  }
`

interface IToggleProps {
  className?: string
}

const Toggle: React.FC<IToggleProps> = props => {
  const { className } = props

  return (
    <StyledToggle className={className}>
      <StyledHandle />
    </StyledToggle>
  )
}

export { Toggle }

export default Toggle
