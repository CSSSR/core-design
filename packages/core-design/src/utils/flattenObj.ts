import { chain, type, map, toPairs, fromPairs } from 'ramda'

const go = (obj: { [key: string]: any }): [string, any][] =>
  chain(([key, value]: [string, {}]) => {
    if (type(value) === 'Object' || type(value) === 'Array') {
      return map(([k, v]) => [`${key}.${k}`, v], go(value))
    } else {
      return [[key, value]]
    }
  }, toPairs(obj))

const flattenObj = (obj: { [key: string]: any }): any => fromPairs(go(obj))

export default flattenObj
export { flattenObj }
