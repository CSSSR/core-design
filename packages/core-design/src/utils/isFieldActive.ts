export interface IsFieldActiveOptions {
  value: string | number | string[]
  focused: boolean
}

export default ({ value, focused }: IsFieldActiveOptions): boolean =>
  (value !== '' && value !== undefined) || focused
