import { css } from '@emotion/react'
import calcRem from '../../../../utils/style/calcRem'
import { ThemeProps } from '../../../../themes/types'

const base = (props: ThemeProps) => {
  const { mobile, tablet, desktop } = props.theme.breakpoints
  const colors = props.theme.colors

  return css`
    & {
      display: flex;
      z-index: 2;
    }

    .title {
      color: ${colors.secondary.darken100};
    }

    .address-item {
      cursor: pointer;

      &:hover .pin {
        transform: scale(1.5);
      }
    }

    .address_russia_2:nth-of-type(3) {
      .title {
        display: none;
      }
    }

    .address,
    .phone {
      color: ${colors.secondary.darken100};
      font-weight: normal;
    }

    .phone {
      display: block;
    }

    @media (hover: hover) and (pointer: fine) {
      .phone:hover {
        color: #0254d8;
      }
    }

    .time,
    .status {
      color: #7e8fa4;
    }

    ${desktop.all} {
      .address {
        margin-top: ${calcRem(16)};
      }

      .phone {
        font-weight: 300;
      }

      .phone,
      .time,
      .status {
        margin-top: ${calcRem(6)};
      }

      .address-item {
        margin-top: ${calcRem(47)};
      }

      .address-item:nth-of-type(1) {
        margin-right: ${calcRem(80)};
      }

      .address-item:nth-of-type(2) {
        margin-right: ${calcRem(42)};
      }

      .address-item:nth-of-type(3) {
        margin-top: ${calcRem(86)};
        margin-right: ${calcRem(83)};
      }

      .address-item:nth-of-type(3) .address {
        margin-top: 0;
      }

      .address,
      .phone {
        font-weight: 400;
        font-size: ${calcRem(14)};
        line-height: ${calcRem(22)};
      }

      .status,
      .time {
        font-size: ${calcRem(14)};
        line-height: ${calcRem(24)};
      }
    }

    ${tablet.all} {
      .address {
        margin-top: ${calcRem(16)};
        font-size: ${calcRem(12)};
        line-height: ${calcRem(16)};
      }

      .phone {
        margin-top: ${calcRem(8)};
        font-size: ${calcRem(12)};
        line-height: ${calcRem(24)};
      }

      .time {
        font-size: ${calcRem(12)};
        line-height: ${calcRem(16)};
      }

      .time,
      .status {
        margin-top: ${calcRem(8)};
      }

      .address-item {
        margin-top: ${calcRem(31)};
      }

      .address-item:nth-of-type(1) {
        margin-right: ${calcRem(33)};
      }

      .address-item:nth-of-type(2) {
        margin-right: ${calcRem(25)};
      }

      .address-item:nth-of-type(3) {
        margin-top: ${calcRem(72)};
        margin-right: ${calcRem(33)};
      }

      .address-item:nth-of-type(3) .address {
        margin-top: ${calcRem(0)};
      }
    }

    ${mobile.all} {
      & {
        flex-direction: column;
        align-items: center;
      }

      .phone {
        font-size: ${calcRem(14)};
        line-height: ${calcRem(24)};
      }

      .title,
      .address,
      .phone,
      .time,
      .status {
        width: 100%;
        text-align: center;
      }

      .address,
      .time,
      .status {
        margin-top: ${calcRem(8)};
      }

      .phone {
        margin-top: ${calcRem(4)};
      }

      .address-item:not(:first-of-type) {
        margin-top: ${calcRem(24)};
      }

      .address-item:last-of-type {
        margin-top: ${calcRem(24)};
      }

      .address-item:nth-of-type(3) .address {
        margin-top: ${calcRem(0)};
      }
    }
  `
}

export default (props: ThemeProps) => base(props)
