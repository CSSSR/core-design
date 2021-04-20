import * as React from 'react'
import { storiesOf } from '@storybook/react'
import ErrorPage from './ErrorPage'

storiesOf('ErrorPage', module).add('ErrorPage', () => {
  return (
    <ErrorPage
      title="Ошибка на сервере"
      subTitle="Что-то пошло не так. Попробуйте еще раз или свяжитесь с нами по почте <a href='mailto:sales@csssr.io'>sales@csssr.io</a>"
    />
  )
})
