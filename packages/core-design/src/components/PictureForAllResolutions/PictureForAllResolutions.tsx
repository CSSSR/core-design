import * as React from 'react'
import styled from '@emotion/styled'
import { withTheme } from 'emotion-theming'
import styles from './PictureForAllResolutions.styles'
import flattenObj from '../../utils/flattenObj'
import { ThemeProps } from '../../themes/types'

interface ImageProps {
  pathToImagesFolder: string
  namespace?: string
  imageName: string
  extension?: string
  alt: string
}

interface Props {
  image: ImageProps
  className?: string
  customResolutions?: string[]
}

const defaultResolutions = ['mobile.all', 'tablet.all', 'desktop.s', 'desktop.m']
const getSrcSet = (
  pathToImagesFolder: string,
  namespace: string,
  resolution: string,
  imageName: string,
  extension: string,
  sizes: string[]
) =>
  sizes
    .map(size => {
      const imagePath = [pathToImagesFolder, namespace, resolution, imageName]
        .filter(item => item)
        .join('/')
      const srcSetItem = require(`${imagePath}@${size}.${extension}`)

      if (size !== '1x') {
        return `${srcSetItem} ${size}`
      }

      return srcSetItem
    })
    .join(',\n')

const PictureForAllResolutionsOrigin: React.FC<Props & ThemeProps> = ({
  className,
  image: { pathToImagesFolder, namespace, imageName, alt, extension = 'png' },
  customResolutions = defaultResolutions,
  theme,
}) => {
  const mediaRulesByResoluton = flattenObj(theme.breakpoints)

  return (
    <React.Fragment>
      <picture className={className}>
        {customResolutions.map(resolution => {
          const mediaRule = mediaRulesByResoluton[resolution].slice(7)

          return (
            <React.Fragment key={resolution}>
              <source
                media={mediaRule}
                type="image/webp"
                srcSet={getSrcSet(pathToImagesFolder, namespace, resolution, imageName, 'webp', [
                  '1x',
                  '2x',
                  '3x',
                ])}
              />

              <source
                media={mediaRule}
                srcSet={getSrcSet(pathToImagesFolder, namespace, resolution, imageName, extension, [
                  '1x',
                  '2x',
                  '3x',
                ])}
              />
            </React.Fragment>
          )
        })}

        <source
          type="image/webp"
          srcSet={getSrcSet(pathToImagesFolder, namespace, 'desktop.all', imageName, 'webp', [
            '1x',
            '2x',
            '3x',
          ])}
        />

        <img
          className={className}
          srcSet={getSrcSet(pathToImagesFolder, namespace, 'desktop.all', imageName, extension, [
            '1x',
            '2x',
            '3x',
          ])}
          src={getSrcSet(pathToImagesFolder, namespace, 'desktop.all', imageName, extension, [
            '1x',
          ])}
          alt={alt}
        />
      </picture>
    </React.Fragment>
  )
}

const PictureForAllResolutions = styled(withTheme(PictureForAllResolutionsOrigin))`
  ${styles.base}
`

export { PictureForAllResolutions }
export default PictureForAllResolutions
