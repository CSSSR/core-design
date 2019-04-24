import * as React from 'react'
import { css } from '@emotion/core'
import { Grid, Text, Heading } from '@asmy/core-design'
import { ProjectLayout } from '../../components/ProjectLayout'
import { Table } from '../../components/Table'
import { Pre } from '../../components/Pre'

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
          grid-row: 1;
        `}
      >
        Heading
      </Heading.H1>

      <Heading.H2
        fontStyle="font_h1_slab"
        css={css`
          grid-column: 1 / span 6;
          grid-row: 2;
        `}
      >
        Заголовок
      </Heading.H2>

      <Heading.H3
        fontStyle="font_h1_regular"
        css={css`
          grid-column: 1 / span 6;
          grid-row: 3;
        `}
      >
        Заголовок
      </Heading.H3>

      <Heading.H4
        fontStyle="font_h2_regular"
        css={css`
          grid-column: 1 / span 6;
          grid-row: 4;
        `}
      >
        Заголовок
      </Heading.H4>

      <Heading.H5
        fontStyle="font_h2_slab"
        css={css`
          grid-column: 7 / span 6;
          grid-row: 2;
        `}
      >
        Заголовок
      </Heading.H5>

      <Heading.H6
        fontStyle="font_h3_regular"
        css={css`
          grid-column: 7 / span 6;
          grid-row: 3;
        `}
      >
        Заголовок
      </Heading.H6>

      <Heading.H6
        fontStyle="font_h3_slab"
        css={css`
          grid-column: 7 / span 6;
          grid-row: 4;
        `}
      >
        Заголовок
      </Heading.H6>

      <Text
        fontStyle="font_p24_strong"
        css={css`
          margin-top: 20px;
          grid-column: 1 / span 12;
        `}
      >
        Компонент заголовка. Используется для отображения заголовков. Имеет 6 различных уровней.
        Заголовки разных уровней визуально никак не отличаются друг от друга, но они важный для семантики. За стиль начертания
        отвечает свойство <Pre css={css`display: inline;`}>fontStyle</Pre>. Может быть только один заголовок первого уровня.
      </Text>

      <Text
        fontStyle="font_p24_strong"
        css={css`
          margin-top: 20px;
          grid-column: 1 / span 12;
        `}
      >
        Что бы 
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
          <td>fontStyle</td>
          <td>
            font_h1_slab | font_h1_regular | font_h2_slab | font_h2_regular | font_h3_slab |
            font_h3_regular | font_subhead_slab | font_subhead_regular
          </td>
          <td>font_h1_slab</td>
          <td>Стиль начертания</td>
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
            import { Text } from '@asmy/core-design'

            <Heading.H1>
              Заголовок первого уровня
            </Heading.H1>

            <Heading.H2>
              Заголовок второго уровня
            </Heading.H2>

            <Heading.H3>
              Заголовок третьего уровня уровня
            </Heading.H3>

            <Heading.H4>
              Заголовок четвертого уровня уровня
            </Heading.H4>

            <Heading.H5>
              Заголовок пятого уровня уровня
            </Heading.H5>

            <Heading.H6>
              Заголовок шестого уровня уровня
            </Heading.H6>
          `}
        </code>
      </Pre>
    </Grid>
  </ProjectLayout>
)

export default DocumentationPage
