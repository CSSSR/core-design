/**
 * ```
 * getRequireContextFilesMap(require.context(...)) => { './file.js': * }
 * ```
 */
const getRequireContextFilesMap = (
  requireContext: __WebpackModuleApi.RequireContext
): { [key: string]: any } =>
  requireContext
    .keys()
    .map(
      (relativeFilePath: string): string[] => {
        return [relativeFilePath, requireContext(relativeFilePath)]
      }
    )
    .reduce((acc: { [key: string]: any }, [relativeFilePath, file]: [string, any]): {
      [key: string]: any
    } => {
      acc[relativeFilePath] = file
      return acc
    }, {})

export default getRequireContextFilesMap
export { getRequireContextFilesMap }
