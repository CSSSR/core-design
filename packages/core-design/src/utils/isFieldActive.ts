export interface IsFieldActiveOptions {
  value: string | number | any
  focused: boolean
}

export default ({ value, focused }: IsFieldActiveOptions): boolean =>
  (value !== '' && value !== undefined) || focused
