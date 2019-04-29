import styled from '@emotion/styled'

const TableRow = styled.tr`
  thead & {
    background-color: #343434;
  }

  :nth-of-type(even) {
    background-color: #f2f2f2;
  }
`

export { TableRow }
export default TableRow
