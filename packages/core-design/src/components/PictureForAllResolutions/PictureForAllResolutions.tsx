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

/**
 * getRequireContextFilesMap(require.context(...)) // { './file.js': '/public/path/file.hash.js' }
 */
function getRequireContextFilesMap(r) {
  return r
    .keys()
    .map(m => {
      return [m, r(m)]
    })
    .reduce((acc, [k, v]) => {
      acc[k] = v
      return acc
    }, {})
}

const defaultResolutions = ['mobile.all', 'tablet.all', 'desktop.s', 'desktop.m']
const getSrcSet = (
  files: any,
  pathToImagesFolder: string,
  namespace: string,
  resolution: string,
  imageName: string,
  extension: string,
  sizes: string[]
) =>
  sizes
    .map(size => {
      // const imagePath = [pathToImagesFolder, namespace, resolution, imageName]
      //   .filter(item => item)
      //   .join('/')
      // const srcSetItem = require(`${imagePath}@${size}.${extension}`)
      console.log(files)
      const srcSetItem = files[`./${resolution}/${imageName}@${size}.${extension}`]

      if (size !== '1x') {
        return `${srcSetItem} ${size}`
      }

      return srcSetItem
    })
    .join(',\n')

const PictureForAllResolutionsOrigin: React.FC<Props & ThemeProps> = ({
  className,
  image: { files: f, pathToImagesFolder, namespace, imageName, alt, extension = 'png' },
  customResolutions = defaultResolutions,
  theme,
}) => {
  const mediaRulesByResoluton = flattenObj(theme.breakpoints)
  const files = getRequireContextFilesMap(f)

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
                srcSet={getSrcSet(
                  files,
                  pathToImagesFolder,
                  namespace,
                  resolution,
                  imageName,
                  'webp',
                  ['1x', '2x', '3x']
                )}
              />

              <source
                media={mediaRule}
                srcSet={getSrcSet(
                  files,
                  pathToImagesFolder,
                  namespace,
                  resolution,
                  imageName,
                  extension,
                  ['1x', '2x', '3x']
                )}
              />
            </React.Fragment>
          )
        })}

        <source
          type="image/webp"
          srcSet={getSrcSet(
            files,
            pathToImagesFolder,
            namespace,
            'desktop.all',
            imageName,
            'webp',
            ['1x', '2x', '3x']
          )}
        />

        <img
          className={className}
          srcSet={getSrcSet(
            files,
            pathToImagesFolder,
            namespace,
            'desktop.all',
            imageName,
            extension,
            ['1x', '2x', '3x']
          )}
          src={getSrcSet(
            files,
            pathToImagesFolder,
            namespace,
            'desktop.all',
            imageName,
            extension,
            ['1x']
          )}
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
