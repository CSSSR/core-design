import fontsUrlByFontsOptions from '../data/fontsUrlByFontsOptions'

export interface FontOptions {
  family: string
  weight: number
  style: string
}

const getFontUrl = ({ family, weight, style }: FontOptions): string =>
  fontsUrlByFontsOptions[`${family}_${weight}_${style}`]

export default getFontUrl
export { getFontUrl }
