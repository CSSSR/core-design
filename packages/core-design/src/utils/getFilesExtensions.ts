import { uniq } from 'ramda'

/**
 * ```
 * getFilesExtensions(require.context(...)) => ['webp', 'png']
 * ```
 */
const getFilesExtensions = (requireContext: __WebpackModuleApi.RequireContext): string[] => {
  const extensions = requireContext.keys().map(
    (relativeFilePath: string): string => {
      const relativePathToImageArray = relativeFilePath.split('.')
      const extension = relativePathToImageArray[relativePathToImageArray.length - 1]

      return extension
    }
  )

  return uniq(extensions)
}

export default getFilesExtensions
export { getFilesExtensions }
