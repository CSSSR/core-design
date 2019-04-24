import * as React from 'react'
import styled from '@emotion/styled'

import { font_p24_strong } from '@asmy/core-design'

const StyledTable = styled.table`
  grid-column: 1 / span 12;
  border: 1px solid black;
  border-collapse: collapse;

  th, td {
    padding: 12px;
    border: 1px solid black;
    text-align: left;
    vertical-align: top;
    ${font_p24_strong}
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  th {
    vertical-align: middle;
  }
`

interface ITableProps {
  className?: string,
}

const Table: React.FC<ITableProps> = props => {
  return (
    <StyledTable {...props}>
      <tbody>
        {props.children}
      </tbody>
    </StyledTable>
  )
}

export { Table }

export default Table
