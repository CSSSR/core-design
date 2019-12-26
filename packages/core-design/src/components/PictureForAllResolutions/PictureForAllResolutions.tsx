import * as React from 'react'
import styled from '@emotion/styled'
import { withTheme } from 'emotion-theming'
import { isEmpty } from 'ramda'
import styles from './PictureForAllResolutions.styles'
import flattenObj from '../../utils/flattenObj'
import { ThemeProps } from '../../themes/types'

interface Props {
  images: any
  alt: string
  className?: string
}

const PictureForAllResolutionsOrigin: React.FC<Props & ThemeProps> = ({
  className,
  images,
  alt,
  theme,
}) => {
  if (isEmpty(theme) || isEmpty(theme.breakpoints)) {
    throw new Error(
      "Component <PictureForAllResolutions /> doesn't receive 'theme' prop or your 'theme' doesn't have breakpoints",
    )
  }

  const mediaRulesByResoluton = flattenObj(theme.breakpoints)

  return (
    <React.Fragment>
      <picture className={className}>
        {Object.keys(images)
          .filter(resolution => resolution !== 'desktop.all')
          .map(resolution => {
            const mediaRule = mediaRulesByResoluton[resolution].slice(7)

            return <source media={mediaRule} type="image/png" srcSet={images[resolution].srcSet} />
          })}

        <img
          className={className}
          srcSet={images['desktop.all'].srcSet}
          src={images['desktop.all']['1x']}
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
