import * as React from 'react'
import { storiesOf } from '@storybook/react'
import ErrorPage404 from './ErrorPage404'
import { PictureForAllResolutions } from '../PictureForAllResolutions'
import { Text } from '../Text'

const Img = ({ className }) => {
  const image = {
    pathToImagesFolder: require.context('../../static/images/imagesForStories'),
    imageName: '404',
    alt: '404',
  }
  return <PictureForAllResolutions className={className} image={image} />
}

storiesOf('ErrorPage', module).add('ErrorPage404', () => {
  return (
    <ErrorPage404
      title="Not found"
      subTitle="We have no idea how you ended up here.<br/> Here is a list of articles that we have right now."
      Img={Img}
    >
      <Text>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book.
      </Text>
    </ErrorPage404>
  )
})
