import React from 'react'
import getFontUrl from '../../utils/getFontUrl'
import fontsPresets from '../../data/fontsPresets'

export interface FontsProps {
  options: Array<{
    family: string
    weight: number
    style: string
    rel: string
  }>
  preset: 'com' | 'school' | 'blog'
}

const Fonts = (props: FontsProps) => {
  const options = props.preset ? fontsPresets[props.preset] : props.options
  const links = options.map(option => (
    <link
      key={getFontUrl(option)}
      rel={option.rel}
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      href={getFontUrl(option)}
    />
  ))

  const fontFacesCss = options
    .map(
      option =>
        `@font-face {
  font-family: ${option.family};
  font-style: ${option.style};
  font-weight: ${option.weight};
  src: url('${getFontUrl(option)}') format('woff2');
  font-display: swap;
}`,
    )
    .join('\n')

  return (
    <>
      {links}
      <style
        dangerouslySetInnerHTML={{
          __html: fontFacesCss,
        }}
      />
    </>
  )
}

export default Fonts
