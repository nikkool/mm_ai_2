// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type Mask3IconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function Mask3Icon(props: Mask3IconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 23"}
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
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M11.25 5c0-1.379-1.121-2.5-2.5-2.5A2.503 2.503 0 006.25 5c0 1.379 1.121 2.5 2.5 2.5s2.5-1.121 2.5-2.5zm2.5 0c0 2.758-2.242 5-5 5s-5-2.242-5-5c0-2.757 2.242-5 5-5s5 2.243 5 5zM0 21.25c0-4.825 3.926-8.75 8.75-8.75s8.75 3.925 8.75 8.75a1.25 1.25 0 11-2.5 0A6.257 6.257 0 008.75 15a6.257 6.257 0 00-6.25 6.25 1.25 1.25 0 11-2.5 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default Mask3Icon
/* prettier-ignore-end */
