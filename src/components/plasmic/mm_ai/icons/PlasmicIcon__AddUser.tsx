// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type AddUserIconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function AddUserIcon(props: AddUserIconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 512 512"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M352.062 314.075c-19.834-20.912-43.665-36.124-68.765-44.408 25.008-22.555 40.754-55.191 40.754-91.439 0-67.899-55.24-123.139-123.139-123.139s-123.14 55.24-123.14 123.139c0 36.248 15.746 68.884 40.754 91.439-25.101 8.285-48.932 23.498-68.766 44.409C17.672 347.906 0 391.728 0 437.468v19.443h401.823v-19.443c0-45.74-17.673-89.562-49.761-123.393zM116.658 178.228c0-46.457 37.796-84.253 84.253-84.253s84.253 37.796 84.253 84.253-37.796 84.253-84.253 84.253-84.253-37.796-84.253-84.253zM40.256 418.025c9.65-67.94 68.591-116.658 121.769-116.658h77.772c53.178 0 112.119 48.718 121.769 116.658H40.256z"
        }
      ></path>

      <path
        d={
          "M453.671 223.595v-58.329h-38.886v58.329h-58.329v38.886h58.329v58.329h38.886v-58.329H512v-38.886z"
        }
      ></path>
    </svg>
  )
}

export default AddUserIcon
/* prettier-ignore-end */
