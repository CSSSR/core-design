import styled from '@emotion/styled'
import { Grid as OriginGrid } from '@csssr/core-design'
import { ThemeProps } from '@csssr/core-design/src/themes/types'

const Grid = styled(OriginGrid.withComponent('section'))`
  grid-template-columns: repeat(12, 1fr);
  grid-column: 4 / span 10;
  padding-right: 4rem;
  padding-left: 4rem;
  width: auto;
  height: 100vh;
  overflow-y: auto;

  ${(props: ThemeProps) => props.theme.breakpoints.desktop.m} {
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 0 16px;
    width: auto;
  }

  ${(props: ThemeProps) => props.theme.breakpoints.desktop.s} {
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 0 16px;
    width: auto;
  }

  ${(props: ThemeProps) => props.theme.breakpoints.tablet.m} {
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 0 16px;
    width: auto;
  }

  ${(props: ThemeProps) => props.theme.breakpoints.tablet.s} {
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 0 1rem;
    width: auto;
  }

  ${(props: ThemeProps) => props.theme.breakpoints.mobile.all} {
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 0 0.5rem;
    width: auto;
  }
`

export { Grid }
