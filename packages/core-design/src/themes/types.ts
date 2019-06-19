import { defaultTheme } from './default'

export type Theme = typeof defaultTheme

export interface ThemeProps {
  theme: Theme
}
