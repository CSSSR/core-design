import { chain, type, map, toPairs, fromPairs } from 'ramda'

const go = (obj: any): string[][] =>
  chain(([key, value]: [string, object]) => {
    if (type(value) === 'Object' || type(value) === 'Array') {
      return map(([k, v]: [string, object | [any]]) => [`${key}.${k}`, v], go(value))
    } else {
      return [[key, value]]
    }
  }, toPairs(obj))

const flattenObj = (obj: any): any => fromPairs(go(obj))

export default flattenObj
export { flattenObj }
