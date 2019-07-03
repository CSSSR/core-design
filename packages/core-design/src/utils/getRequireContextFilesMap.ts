/**
 * ```
 * getRequireContextFilesMap(require.context(...)) => { './file.js': '/public/path/file.hash.js' }
 * ```
 */
const getRequireContextFilesMap = (
  requireContext: __WebpackModuleApi.RequireContext
): { [key: string]: string } =>
  requireContext
    .keys()
    .map(
      (relativeFilePath: string): string[] => {
        return [relativeFilePath, requireContext(relativeFilePath)]
      }
    )
    .reduce((acc: { [key: string]: string }, [relativeFilePath, absoluteFilePath]: string[]): {
      [key: string]: string
    } => {
      acc[relativeFilePath] = absoluteFilePath
      return acc
    }, {})

export default getRequireContextFilesMap
export { getRequireContextFilesMap }
