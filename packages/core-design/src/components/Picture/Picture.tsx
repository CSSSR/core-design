import { Fragment } from 'react'
import styled from '@emotion/styled'
import styles from './Picture.styles'
import getSrcSet from '../../utils/getSrcSet'

// export interface Props {
//   className: string,
//   image: shape({
//     namespace: string,
//     key: string,
//     alt: string,
//     extension: string,
//   }),
// }

const Image = styled('img')`
  ${styles.base}
`

const defaultResolutions = ['360', '1024', '1280', '1360']
const mediaRuleByResoluton = {
  360: '(max-width: 767px)',
  1024: '(max-width: 1279px)',
  1280: '(max-width: 1359px)',
  1360: '(max-width: 1919px)',
}

const PictureForAllResolutions = ({
  className,
  image: { namespace, key, alt, extension = 'png' },
  customResolutions = defaultResolutions,
}) => (
  <picture className={className}>
    {customResolutions.map(resolution => (
      <Fragment key={resolution}>
        <source
          media={mediaRuleByResoluton[resolution]}
          type="image/webp"
          srcSet={getSrcSet(namespace, resolution, key, 'webp', ['1x', '2x', '3x'])}
        />

        <source
          media={mediaRuleByResoluton[resolution]}
          srcSet={getSrcSet(namespace, resolution, key, extension, ['1x', '2x', '3x'])}
        />
      </Fragment>
    ))}

    <source
      type="image/webp"
      srcSet={getSrcSet(namespace, 1920, key, 'webp', ['1x', '2x', '3x'])}
    />

    <Image
      className={className}
      srcSet={getSrcSet(namespace, 1920, key, extension, ['1x', '2x', '3x'])}
      src={getSrcSet(namespace, 1920, key, extension, ['1x'])}
      alt={alt}
    />
  </picture>
)

export default PictureForAllResolutions
