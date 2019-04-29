import styled from '@emotion/styled'

const OriginTable = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
`

const Table = styled(OriginTable)`
  grid-column: 1 / span 12;
`

export { Table }
export default Table
