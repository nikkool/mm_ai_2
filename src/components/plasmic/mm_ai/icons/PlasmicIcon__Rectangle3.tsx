// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type Rectangle3IconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function Rectangle3Icon(props: Rectangle3IconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 259 40"}
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
          "M249.038 0H9.962C4.46 0 0 4.477 0 10v20c0 5.523 4.46 10 9.962 10h239.076C254.54 40 259 35.523 259 30V10c0-5.523-4.46-10-9.962-10z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default Rectangle3Icon
/* prettier-ignore-end */
