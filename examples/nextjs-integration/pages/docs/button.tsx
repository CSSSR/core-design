import * as React from 'react'
import { css } from '@emotion/core'
import { Button, Grid, Text, Heading } from '@asmy/core-design'
import { ProjectLayout } from '../../components/ProjectLayout'
import { Table } from '../../components/Table'
import { Pre } from '../../components/Pre'


const handleClick = () => alert('Ты кликнул кнопку')

const DocumentationPage = () => (
  <ProjectLayout>
    <Grid
      css={css`
        margin-top: 20px;
      `}
    >
      <Heading.H1
        fontStyle='font_h1_slab'
        css={css`
          grid-column: 1 / span 12;
        `}
      >
        Button
      </Heading.H1>

      <Button
        css={css`
          grid-column: 1 / span 3;
        `}
        kind="primary"
        onClick={handleClick}
      >
        Кнопка
      </Button>

      <Button
        css={css`
          grid-column: 4 / span 3;
        `}
        kind="primary"
        onClick={handleClick}
        disabled
      >
        Кнопка
      </Button>

      <Button
        css={css`
          grid-column: 7 / span 3;
        `}
        kind="secondary"
        onClick={handleClick}
      >
        Кнопка
      </Button>

      <Button
        css={css`
          grid-column: 10 / span 3;
        `}
        kind="secondary"
        onClick={handleClick}
        disabled
      >
        Кнопка
      </Button>

      <Text
        fontStyle='font_p24_strong'
        css={css`
          margin-top: 20px;
          grid-column: 1 / span 12;
        `}
      >
        Компонент кнопки. Используется как триггер для выполнения определённого действия. Кнопка однозначно сообщает пользователю, что произойдёт после нажатия на неё.
      </Text>

      <Heading.H2
        fontStyle='font_h2_slab'
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
            <td>kind</td>
            <td>primary | secondary</td>
            <td>primary</td>
            <td>Тема кнопки</td>
          </tr>
          <tr>
            <td>disabled</td>
            <td>true | false</td>
            <td>false</td>
            <td>Отвечает за disabled состояние кнопки</td>
          </tr>
      </Table>

      <Heading.H2>
        as='h2'
        fontStyle='font_h2_slab'
        css={css`
          margin-top: 40px;
          grid-column: 1 / span 12;
        `}
      >
        Хендлеры
      </Heading.H2>

      <Table>
          <tr>
            <th>Имя</th>
            <th>Аргументы</th>
            <th>Комментарий</th>
          </tr>
          <tr>
            <td>onClick</td>
            <td>event</td>
            <td>Функция, которая будет исполнятся при клике на кнопку</td>
          </tr>
      </Table>

      <Heading.H2
        fontStyle='font_h2_slab'
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
          import { Button } from '@asmy/core-design'

          <Button
            kind="secondary"
            onClick={handleClick}
            disabled
          >
            Кнопка
          </Button>
        `}
        </code>
      </Pre>
    </Grid>
  </ProjectLayout>
)

export default DocumentationPage
