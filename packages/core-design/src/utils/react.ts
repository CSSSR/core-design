import { OptionalKeys } from 'utility-types'

type NotRequired<T> = { [K in OptionalKeys<T>]: T[K] }

export type DefaultProps<Props> = NotRequired<Props>
