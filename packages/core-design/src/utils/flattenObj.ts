import { chain, type, map, toPairs, fromPairs } from 'ramda'

const go = (obj: any) =>
  chain(([key, value]: [string, object | [any]]) => {
    if (type(value) === 'Object' || type(value) === 'Array') {
      return map(([k, v]: [string, object | [any]]) => [`${key}.${k}`, v], go(value))
    } else {
      return [[key, value]]
    }
  }, toPairs(obj))

const flattenObj = (obj: any) => fromPairs(go(obj))

export default flattenObj
export { flattenObj }

flattenObj({ a: 1, b: { c: 3 }, d: { e: { f: 6 }, g: [{ h: 8, i: 9 }, 0] } })
