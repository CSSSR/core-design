import * as React from 'react'
import { storiesOf } from '@storybook/react'
import ErrorPage from './ErrorPage'
import { PictureForAllResolutions } from '../PictureForAllResolutions'

const Img = ({ className }) => {
  const image = {
    pathToImagesFolder: require.context('../../static/images/imagesForStories'),
    imageName: 'ultramarine',
    alt: 'Сержант Ультрамаринов',
  }

  return <PictureForAllResolutions className={className} image={image} />
}

storiesOf('ErrorPage', module).add('ErrorPage', () => {
  return (
    <ErrorPage
      title="Ошибка на сервере"
      subTitle="Что-то пошло не так. Попробуйте еще раз или свяжитесь с нами по почте <a href='mailto:sales@csssr.io'>sales@csssr.io</a>"
      Img={Img}
    />
  )
})
