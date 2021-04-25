// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type Mask2IconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function Mask2Icon(props: Mask2IconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 23"}
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
          "M15 20v-5h5l.001 5H15zm5-7.5h-5a2.502 2.502 0 00-2.5 2.5v5c0 1.379 1.121 2.5 2.5 2.5h5c1.379 0 2.5-1.121 2.5-2.5v-5c0-1.379-1.121-2.5-2.5-2.5zM2.5 20v-5h5l.001 5H2.5zm5-7.5h-5A2.502 2.502 0 000 15v5c0 1.379 1.121 2.5 2.5 2.5h5c1.379 0 2.5-1.121 2.5-2.5v-5c0-1.379-1.121-2.5-2.5-2.5zm7.5-5v-5h5l.001 5H15zM20 0h-5a2.502 2.502 0 00-2.5 2.5v5c0 1.379 1.121 2.5 2.5 2.5h5c1.379 0 2.5-1.121 2.5-2.5v-5C22.5 1.121 21.379 0 20 0zM2.5 7.5v-5h5l.001 5H2.5zm5-7.5h-5A2.503 2.503 0 000 2.5v5C0 8.879 1.121 10 2.5 10h5C8.879 10 10 8.879 10 7.5v-5C10 1.121 8.879 0 7.5 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default Mask2Icon
/* prettier-ignore-end */
