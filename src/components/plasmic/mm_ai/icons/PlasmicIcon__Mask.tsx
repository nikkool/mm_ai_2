// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type MaskIconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function MaskIcon(props: MaskIconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 27"}
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
          "M13.75 13.75a1.25 1.25 0 11-2.5 0V1.25a1.25 1.25 0 112.5 0v12.5zm2.8-10.573a1.251 1.251 0 011.684-.538A12.467 12.467 0 0125 13.75c0 6.892-5.608 12.5-12.5 12.5-6.893 0-12.5-5.608-12.5-12.5C0 9.054 2.594 4.798 6.769 2.64a1.25 1.25 0 011.147 2.22A9.971 9.971 0 002.5 13.75c0 5.514 4.486 10 10 10s10-4.486 10-10a9.972 9.972 0 00-5.415-8.89 1.249 1.249 0 01-.536-1.683z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default MaskIcon
/* prettier-ignore-end */
