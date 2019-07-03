/**
 * ```
 * getPictureSrcSet(images, resolution, imageName, extension, sizes) => `
 *  public/path/file@1x.hash.extension,
 *  public/path/file@2x.hash.extension 2x,
 *  public/path/file@3x.hash.extension 3x`
 * `
 * ```
 */
const getPictureSrcSet = (
  images: { [key: string]: string },
  resolution: string,
  imageName: string,
  extension: string,
  sizes: string[]
): string =>
  sizes
    .map(size => {
      const srcSetItem = images[`./${resolution}/${imageName}@${size}.${extension}`]

      if (size !== '1x') {
        return `${srcSetItem} ${size}`
      }
      return srcSetItem
    })
    .join(',\n')

export default getPictureSrcSet
export { getPictureSrcSet }
