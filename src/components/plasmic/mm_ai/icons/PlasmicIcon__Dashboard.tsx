// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type DashboardIconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function DashboardIcon(props: DashboardIconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 30 30"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M18.75 23.75v-5h5l.001 5H18.75zm5-7.5h-5a2.503 2.503 0 00-2.5 2.5v5c0 1.379 1.121 2.5 2.5 2.5h5c1.379 0 2.5-1.121 2.5-2.5v-5c0-1.379-1.121-2.5-2.5-2.5zm-17.5 7.5v-5h5l.001 5H6.25zm5-7.5h-5a2.503 2.503 0 00-2.5 2.5v5c0 1.379 1.121 2.5 2.5 2.5h5c1.379 0 2.5-1.121 2.5-2.5v-5c0-1.379-1.121-2.5-2.5-2.5zm7.5-5v-5h5l.001 5H18.75zm5-7.5h-5a2.503 2.503 0 00-2.5 2.5v5c0 1.379 1.121 2.5 2.5 2.5h5c1.379 0 2.5-1.121 2.5-2.5v-5c0-1.379-1.121-2.5-2.5-2.5zm-17.5 7.5v-5h5l.001 5H6.25zm5-7.5h-5a2.503 2.503 0 00-2.5 2.5v5c0 1.379 1.121 2.5 2.5 2.5h5c1.379 0 2.5-1.121 2.5-2.5v-5c0-1.379-1.121-2.5-2.5-2.5z"
        }
        fill={"#707C97"}
      ></path>

      <mask
        id={"IoAvT6h70a"}
        maskUnits={"userSpaceOnUse"}
        x={"3"}
        y={"3"}
        width={"24"}
        height={"24"}
      >
        <path
          fillRule={"evenodd"}
          clipRule={"evenodd"}
          d={
            "M18.75 23.75v-5h5l.001 5H18.75zm5-7.5h-5a2.503 2.503 0 00-2.5 2.5v5c0 1.379 1.121 2.5 2.5 2.5h5c1.379 0 2.5-1.121 2.5-2.5v-5c0-1.379-1.121-2.5-2.5-2.5zm-17.5 7.5v-5h5l.001 5H6.25zm5-7.5h-5a2.503 2.503 0 00-2.5 2.5v5c0 1.379 1.121 2.5 2.5 2.5h5c1.379 0 2.5-1.121 2.5-2.5v-5c0-1.379-1.121-2.5-2.5-2.5zm7.5-5v-5h5l.001 5H18.75zm5-7.5h-5a2.503 2.503 0 00-2.5 2.5v5c0 1.379 1.121 2.5 2.5 2.5h5c1.379 0 2.5-1.121 2.5-2.5v-5c0-1.379-1.121-2.5-2.5-2.5zm-17.5 7.5v-5h5l.001 5H6.25zm5-7.5h-5a2.503 2.503 0 00-2.5 2.5v5c0 1.379 1.121 2.5 2.5 2.5h5c1.379 0 2.5-1.121 2.5-2.5v-5c0-1.379-1.121-2.5-2.5-2.5z"
          }
          fill={"#fff"}
        ></path>
      </mask>

      <g mask={"url(#IoAvT6h70a)"}>
        <path fill={"#707C97"} d={"M0 0h30v30H0z"}></path>
      </g>
    </svg>
  )
}

export default DashboardIcon
/* prettier-ignore-end */
