//     namespace: string,
//     resolution: string,
//     key: string,
//     alt: string,
//     extension: string,
//     sizes: arrayOf(string)

export default (namespace, resolution, key, extension, sizes) => {
  return sizes
    .map(size => {
      const imagePath = [namespace, resolution, key].filter(item => item).join('/')
      const srcSetItem = require(`${imagePath}@${size}.${extension}`)
      if (size !== '1x') {
        return `${srcSetItem} ${size}`
      }
      return srcSetItem
    })
    .join(',\n')
}
