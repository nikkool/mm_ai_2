// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type ArrowsuploadOneIconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function ArrowsuploadOneIcon(props: ArrowsuploadOneIconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 62 57"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15.084 24.072c-5.687 1.243-9.917 5.944-9.917 11.553 0 6.558 5.783 11.875 12.916 11.875a13.96 13.96 0 003.53-.449M46.57 24.072c5.688 1.243 9.918 5.944 9.918 11.553 0 6.558-5.783 11.875-12.917 11.875a13.96 13.96 0 01-3.53-.449M46.5 23.75C46.5 15.88 39.56 9.5 31 9.5c-8.56 0-15.5 6.38-15.5 14.25m6.543 9.359L31 24.847l9.212 8.403M31 45.125V29.048"
        }
        stroke={"currentColor"}
        strokeWidth={"4"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  )
}

export default ArrowsuploadOneIcon
/* prettier-ignore-end */
