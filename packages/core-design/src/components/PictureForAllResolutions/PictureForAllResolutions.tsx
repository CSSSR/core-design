import * as React from 'react'
import styled from '@emotion/styled'
import { withTheme } from 'emotion-theming'
import { isEmpty } from 'ramda'
import styles from './PictureForAllResolutions.styles'
import flattenObj from '../../utils/flattenObj'
import getRequireContextFilesMap from '../../utils/getRequireContextFilesMap'
import getFilesExtensions from '../../utils/getFilesExtensions'
import getPictureSrcSet from '../../utils/getPictureSrcSet'
import { ThemeProps } from '../../themes/types'

interface ImageProps {
  pathToImagesFolder: __WebpackModuleApi.RequireContext
  imageName: string
  alt: string
}

interface Props {
  image: ImageProps
  className?: string
  customResolutions?: string[]
}

const defaultResolutions = ['mobile.all', 'tablet.all', 'desktop.s', 'desktop.m']
const PictureForAllResolutionsOrigin: React.FC<Props & ThemeProps> = ({
  className,
  image: { pathToImagesFolder, imageName, alt },
  customResolutions = defaultResolutions,
  theme,
}) => {
  if (isEmpty(theme) || isEmpty(theme.breakpoints)) {
    throw new Error(
      "Component <PictureForAllResolutions /> doesn't receive 'theme' prop or your 'theme' doesn't have breakpoints"
    )
  }

  const mediaRulesByResoluton = flattenObj(theme.breakpoints)
  const images = getRequireContextFilesMap(pathToImagesFolder)
  const extensions = getFilesExtensions(pathToImagesFolder)
  const defaultExtension = extensions.filter(e => e !== 'webp')[0]

  return (
    <React.Fragment>
      <picture className={className}>
        {customResolutions.map(resolution => {
          const mediaRule = mediaRulesByResoluton[resolution].slice(7)

          return (
            <React.Fragment key={resolution}>
              {extensions.map(extension => (
                <source
                  key={extension}
                  media={mediaRule}
                  type={`image/${extension}`}
                  srcSet={getPictureSrcSet(images, resolution, imageName, extension, [
                    '1x',
                    '2x',
                    '3x',
                  ])}
                />
              ))}
            </React.Fragment>
          )
        })}

        <source
          type="image/webp"
          srcSet={getPictureSrcSet(images, 'desktop.all', imageName, 'webp', ['1x', '2x', '3x'])}
        />

        <img
          className={className}
          srcSet={getPictureSrcSet(images, 'desktop.all', imageName, defaultExtension, [
            '1x',
            '2x',
            '3x',
          ])}
          src={getPictureSrcSet(images, 'desktop.all', imageName, defaultExtension, ['1x'])}
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
