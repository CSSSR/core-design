import * as React from 'react'
import { css } from '@emotion/core'
import { Button, ButtonLink, Grid, Text, Heading } from '@csssr/core-design'
import { ProjectLayout } from '../components/ProjectLayout'

const IndexPage = () => (
  <ProjectLayout>
    <Button
      type="button"
      css={css`
        margin-top: 20px;
      `}
      theme="primary"
    >
      This is a button from Core Design
    </Button>

    <ButtonLink
      href="/two"
      css={css`
        margin-top: 20px;
      `}
      theme="secondary"
    >
      This is a Link looking like Button from Core Design
    </ButtonLink>

    <Grid
      css={css`
        margin-top: 20px;
        margin-right: auto;
        margin-left: auto;
      `}
      withGuidelines
    >
      <Heading
        css={css`
          grid-column: 1 / span 12;
          text-align: center;
        `}
      >
        This is Grid component
      </Heading>

      <Text
        css={css`
          grid-column: 1 / span 12;
          margin-bottom: 40px;
          text-align: center;
        `}
      >
        from Core Design
      </Text>

      <Button
        type="button"
        css={css`
          grid-column: 1 / span 6;
        `}
        theme="primary"
      >
        Same Button
      </Button>

      <Button
        type="button"
        css={css`
          grid-column: 7 / span 6;
        `}
        theme="secondary"
      >
        Same Button
      </Button>

      <Button
        type="button"
        css={css`
          grid-column: 1 / span 4;
          margin-top: 20px;
        `}
        theme="secondary"
      >
        Same Button
      </Button>

      <Button
        type="button"
        css={css`
          grid-column: 5 / span 4;
          margin-top: 20px;
        `}
        theme="secondary"
      >
        Same Button
      </Button>

      <Button
        type="button"
        css={css`
          grid-column: 9 / span 4;
          margin-top: 20px;
        `}
        theme="secondary"
      >
        Same Button
      </Button>

      <Button
        type="button"
        css={css`
          grid-column: 1 / span 3;
          margin-top: 20px;
        `}
        theme="primary"
      >
        Same Button
      </Button>

      <Button
        type="button"
        css={css`
          grid-column: 4 / span 3;
          margin-top: 20px;
        `}
        theme="primary"
      >
        Same Button
      </Button>

      <Button
        type="button"
        css={css`
          grid-column: 7 / span 3;
          margin-top: 20px;
        `}
        theme="primary"
      >
        Same Button
      </Button>

      <Button
        type="button"
        css={css`
          grid-column: 10 / span 3;
          margin-top: 20px;
        `}
        theme="primary"
      >
        Same Button
      </Button>
    </Grid>

    <Heading
      as='h1'
      css={css`
        margin-top: 20px !important;
      `}
    >
      H1 Slab
    </Heading>

    <Heading
      as='h2'
      fontStyle='font_h1_regular'
      css={css`
        margin-top: 20px !important;
      `}
    >
      H1 Regular
    </Heading>

    <Heading
      as='h2'
      fontStyle='font_h2_slab'
      css={css`
        margin-top: 20px !important;
      `}
    >
      H2 Slab
    </Heading>

    <Heading
      as='h2'
      fontStyle='font_h2_regular'
      css={css`
        margin-top: 20px !important;
      `}
    >
      H2 Regular
    </Heading>

    <Heading
      as='h3'
      fontStyle='font_h3_slab'
      css={css`
        margin-top: 20px !important;
      `}
    >
      H3 Slab
    </Heading>

    <Heading
      as='h3'
      fontStyle='font_h3_regular'
      css={css`
        margin-top: 20px !important;
      `}
    >
      H3 Regular
    </Heading>

    <Heading
      as='h4'
      fontStyle='font_subhead_slab'
      css={css`
        margin-top: 20px !important;
      `}
    >
      Subhead Slab
    </Heading>
    
    <Heading
      as='h5'
      fontStyle='font_subhead_regular'
      css={css`
        margin-top: 20px !important;
      `}
    >
      Subhead Regular
    </Heading>

    <Text
      css={css`
        margin-top: 20px !important;
      `}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor
      sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Text>

    <Text
      fontStyle="font_p24_strong"
      css={css`
        margin-top: 20px !important;
      `}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor
      sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Text>

    <Text
      fontStyle="font_roboto_slab_light"
      css={css`
        margin-top: 20px !important;
      `}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor
      sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
      sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Text>
  </ProjectLayout>
)

export default IndexPage
