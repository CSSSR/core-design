import * as React from 'react'
import { css } from '@emotion/core'
import { Grid, Text, Heading } from '@csssr/core-design'
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
        `}
      >
        Text
      </Heading.H1>

      <Text
        fontStyle="font_p16_regular"
        css={css`
          margin-top: 20px;
          grid-column: 1 / span 12;
        `}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel cursus augue. Integer at
        sagittis sem. Duis laoreet malesuada aliquam. Maecenas ac nunc odio. Fusce sagittis lectus
        sit amet massa cursus, et scelerisque urna finibus. Integer a mauris tincidunt, lacinia orci
        quis, hendrerit lorem. Ut ex libero, maximus eu mi at, vulputate vulputate turpis.
        Vestibulum dignissim dui nibh, quis dignissim ante varius at. Morbi a purus tellus. Nullam
        eu consequat sem, faucibus elementum lorem. Nam ut aliquam erat. Phasellus at tempor mauris,
        eget venenatis neque. Quisque fringilla mauris nisl, vitae consequat enim accumsan sit amet.
        Morbi quis ultricies ipsum. Curabitur interdum in ligula vitae consequat. Nunc dictum,
        turpis non sagittis ornare, magna justo aliquam lorem, eu suscipit est nulla sed orci.
        Mauris rutrum ex at elementum euismod. Aliquam at suscipit lacus. Interdum et malesuada
        fames ac ante ipsum primis in faucibus. Aenean vitae blandit magna, non malesuada sapien.
        Suspendisse nec odio luctus, interdum neque non, hendrerit nulla. Suspendisse eget laoreet
        orci, at tristique diam.
      </Text>

      <Text
        fontStyle="font_p24_strong"
        css={css`
          margin-top: 20px;
          grid-column: 1 / span 12;
        `}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel cursus augue. Integer at
        sagittis sem. Duis laoreet malesuada aliquam. Maecenas ac nunc odio. Fusce sagittis lectus
        sit amet massa cursus, et scelerisque urna finibus. Integer a mauris tincidunt, lacinia orci
        quis, hendrerit lorem. Ut ex libero, maximus eu mi at, vulputate vulputate turpis.
        Vestibulum dignissim dui nibh, quis dignissim ante varius at. Morbi a purus tellus. Nullam
        eu consequat sem, faucibus elementum lorem. Nam ut aliquam erat. Phasellus at tempor mauris,
        eget venenatis neque. Quisque fringilla mauris nisl, vitae consequat enim accumsan sit amet.
        Morbi quis ultricies ipsum. Curabitur interdum in ligula vitae consequat. Nunc dictum,
        turpis non sagittis ornare, magna justo aliquam lorem, eu suscipit est nulla sed orci.
        Mauris rutrum ex at elementum euismod. Aliquam at suscipit lacus. Interdum et malesuada
        fames ac ante ipsum primis in faucibus. Aenean vitae blandit magna, non malesuada sapien.
        Suspendisse nec odio luctus, interdum neque non, hendrerit nulla. Suspendisse eget laoreet
        orci, at tristique diam.
      </Text>

      <Text
        fontStyle="font_roboto_slab_light"
        css={css`
          margin-top: 20px;
          grid-column: 1 / span 12;
        `}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel cursus augue. Integer at
        sagittis sem. Duis laoreet malesuada aliquam. Maecenas ac nunc odio. Fusce sagittis lectus
        sit amet massa cursus, et scelerisque urna finibus. Integer a mauris tincidunt, lacinia orci
        quis, hendrerit lorem. Ut ex libero, maximus eu mi at, vulputate vulputate turpis.
        Vestibulum dignissim dui nibh, quis dignissim ante varius at. Morbi a purus tellus. Nullam
        eu consequat sem, faucibus elementum lorem. Nam ut aliquam erat. Phasellus at tempor mauris,
        eget venenatis neque. Quisque fringilla mauris nisl, vitae consequat enim accumsan sit amet.
        Morbi quis ultricies ipsum. Curabitur interdum in ligula vitae consequat. Nunc dictum,
        turpis non sagittis ornare, magna justo aliquam lorem, eu suscipit est nulla sed orci.
        Mauris rutrum ex at elementum euismod. Aliquam at suscipit lacus. Interdum et malesuada
        fames ac ante ipsum primis in faucibus. Aenean vitae blandit magna, non malesuada sapien.
        Suspendisse nec odio luctus, interdum neque non, hendrerit nulla. Suspendisse eget laoreet
        orci, at tristique diam.
      </Text>

      <Text
        fontStyle="font_p24_strong"
        css={css`
          margin-top: 40px;
          grid-column: 1 / span 12;
        `}
      >
        Компонент текста. Используется для отображения текстовых блоков.
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
          <td>font_p16_regular | font_p24_strong | font_roboto_slab_light</td>
          <td>font_p16_regular</td>
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
            import { Text } from '@csssr/core-design'

            <Text fontStyle="font_p24_strong">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel cursus augue. Integer at
              sagittis sem. Duis laoreet malesuada aliquam. Maecenas ac nunc odio. Fusce sagittis lectus
              sit amet massa cursus, et scelerisque urna finibus. Integer a mauris tincidunt, lacinia orci
              quis, hendrerit lorem. Ut ex libero, maximus eu mi at, vulputate vulputate turpis.
              Vestibulum dignissim dui nibh, quis dignissim ante varius at. Morbi a purus tellus. Nullam
              eu consequat sem, faucibus elementum lorem. Nam ut aliquam erat. Phasellus at tempor mauris,
              eget venenatis neque. Quisque fringilla mauris nisl, vitae consequat enim accumsan sit amet.
              Morbi quis ultricies ipsum. Curabitur interdum in ligula vitae consequat. Nunc dictum,
              turpis non sagittis ornare, magna justo aliquam lorem, eu suscipit est nulla sed orci.
              Mauris rutrum ex at elementum euismod. Aliquam at suscipit lacus. Interdum et malesuada
              fames ac ante ipsum primis in faucibus. Aenean vitae blandit magna, non malesuada sapien.
              Suspendisse nec odio luctus, interdum neque non, hendrerit nulla. Suspendisse eget laoreet
              orci, at tristique diam.
            </Text>
          `}
        </code>
      </Pre>
    </Grid>
  </ProjectLayout>
)

export default DocumentationPage
