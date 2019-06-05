import styled from '@emotion/styled'

const OriginPre = styled.pre`
  margin: 0;
  margin-bottom: 40px;
  padding: 40px;
  background-color: #f2f2f2;
`

const Pre = styled(OriginPre)`
  grid-column: 1 / span 12;
`

export { Pre }
export default Pre
