import * as React from 'react'
import { css } from '@emotion/core'
import { Grid, Text, Heading } from '@csssr/core-design'
import { ProjectLayout } from '../../components/ProjectLayout'
import { Table } from '../../components/Table'
import { Pre } from '../../components/Pre'

const mediaQueries = {
  mobile: '(max-width: 768px)'
}

const DocumentationPage = () => (
  <ProjectLayout>
    <Grid
      css={css`
        margin-top: 20px;
      `}
    >
      <Heading.H1
        fontStyle="font_h1_slab"
        css={css`
          grid-column: 1 / span 12;
        `}
      >
        Grid
      </Heading.H1>

      <Grid
        css={css`
          grid-column: 1 / span 12;
          padding-bottom: 20px;

          div {
            margin-top: 20px;
            padding: 12px;
            border: 1px solid black;
            font-size: 18px;
            text-align: center;  
            color: white;
            background-color: #393939;
          }
        `}
        withGuidelines
      >
        <div css={css`grid-column: 1 / span 12; @media ${mediaQueries.mobile} { grid-column: 1 / span 6;} `}>1</div>

        <div css={css`grid-column: 1 / span 6; @media ${mediaQueries.mobile} { grid-column: 1 / span 3;} `}>1/2</div>
        <div css={css`grid-column: 7 / span 6; @media ${mediaQueries.mobile} { grid-column: 4 / span 3;} `}>1/2</div>

        <div css={css`grid-column: 1 / span 4; @media ${mediaQueries.mobile} { display: none; } `}>1/4</div>
        <div css={css`grid-column: 5 / span 4; @media ${mediaQueries.mobile} { display: none; } `}>1/4</div>
        <div css={css`grid-column: 9 / span 4; @media ${mediaQueries.mobile} { display: none; } `}>1/4</div>

        <div css={css`grid-column: 1 / span 3; @media ${mediaQueries.mobile} { grid-column: 1 / span 2; } `}>1/3</div>
        <div css={css`grid-column: 4 / span 3; @media ${mediaQueries.mobile} { grid-column: 3 / span 2; } `}>1/3</div>
        <div css={css`grid-column: 7 / span 3; @media ${mediaQueries.mobile} { grid-column: 5 / span 2; }  `}>1/3</div>
        <div css={css`grid-column: 10 / span 3; @media ${mediaQueries.mobile} { display: none; } `}>1/3</div>

        <div css={css`grid-column: 1 / span 2; @media ${mediaQueries.mobile} { grid-column: 1 / span 1; } `}>1/6</div>
        <div css={css`grid-column: 3 / span 2; @media ${mediaQueries.mobile} { grid-column: 2 / span 1; } `}>1/6</div>
        <div css={css`grid-column: 5 / span 2; @media ${mediaQueries.mobile} { grid-column: 3 / span 1; }  `}>1/6</div>
        <div css={css`grid-column: 7 / span 2; @media ${mediaQueries.mobile} { grid-column: 4 / span 1; } `}>1/6</div>
        <div css={css`grid-column: 9 / span 2; @media ${mediaQueries.mobile} { grid-column: 5 / span 1; }  `}>1/6</div>
        <div css={css`grid-column: 11 / span 2; @media ${mediaQueries.mobile} { grid-column: 6 / span 1; } `}>1/6</div>

        <div css={css`grid-column: 1 / span 1; @media ${mediaQueries.mobile} { display: none; } `}>1/12</div>
        <div css={css`grid-column: 2 / span 1; @media ${mediaQueries.mobile} { display: none; } `}>1/12</div>
        <div css={css`grid-column: 3 / span 1; @media ${mediaQueries.mobile} { display: none; }  `}>1/12</div>
        <div css={css`grid-column: 4 / span 1; @media ${mediaQueries.mobile} { display: none; } `}>1/12</div>
        <div css={css`grid-column: 5 / span 1; @media ${mediaQueries.mobile} { display: none; }  `}>1/12</div>
        <div css={css`grid-column: 6 / span 1; @media ${mediaQueries.mobile} { display: none; } `}>1/12</div>
        <div css={css`grid-column: 7 / span 1; @media ${mediaQueries.mobile} { display: none; } `}>1/12</div>
        <div css={css`grid-column: 8 / span 1; @media ${mediaQueries.mobile} { display: none; } `}>1/12</div>
        <div css={css`grid-column: 9 / span 1; @media ${mediaQueries.mobile} { display: none; }  `}>1/12</div>
        <div css={css`grid-column: 10 / span 1; @media ${mediaQueries.mobile} { display: none; } `}>1/12</div>
        <div css={css`grid-column: 11 / span 1; @media ${mediaQueries.mobile} { display: none; }  `}>1/12</div>
        <div css={css`grid-column: 12 / span 1; @media ${mediaQueries.mobile} { display: none; } `}>1/12</div>

      </Grid>

      <Text
        fontStyle="font_p24_strong"
        css={css`
          margin-top: 20px;
          grid-column: 1 / span 12;
        `}
      >
        Компонент грида. Используется для построения лейаута. Это компонент контейнер, т.e. его
        действие распростроняется только на дочерние компоненты. На странице может быть как один,
        так и несколько грид компонентов. Грид компонент может содержать в себе другой грид
        компонент. Пока количество колонок в компоненте равно 12 при разрешениях выше 768px и 6 при
        меньшем разрешении, позже это можно будет регулировать с помощью пропсов. Подробнее о гридах
        можно узнать <a href="https://developer.mozilla.org/ru/docs/Web/CSS/CSS_Grid_Layout">тут</a>
        , а попрактиковаться в их использовании <a href="https://cssgridgarden.com/#ru">тут</a>.
      </Text>

      <Heading.H2
        fontStyle="font_h2_slab"
        css={css`
          grid-column: 1 / span 12;
        `}
      >
        Свойства
      </Heading.H2>

      <Table
        css={css`
          td:nth-child(2) {
            width: 200px;
          }

          td:nth-child(3) {
            width: 200px;
          }
        `}
      >
        <tr>
          <th>Имя</th>
          <th>Допустимые значения</th>
          <th>Значение по умолчанию</th>
          <th>Комментарий</th>
        </tr>
        <tr>
          <td>withGuidelines</td>
          <td>boolean</td>
          <td>false</td>
          <td>Отвечает за показ гайдлайнов</td>
        </tr>
      </Table>

      <Heading.H2
        fontStyle="font_h2_slab"
        css={css`
          margin-top: 40px;
          grid-column: 1 / span 12;
        `}
      >
        Код
      </Heading.H2>

      <Pre>
        <code>
          {`
            import { Grid } from '@csssr/core-design'

            <Grid withGuidelines>
              Грид
            </Grid>
          `}
        </code>
      </Pre>
    </Grid>
  </ProjectLayout>
)

export default DocumentationPage
