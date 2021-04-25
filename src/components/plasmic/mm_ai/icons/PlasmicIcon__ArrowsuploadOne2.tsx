// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type ArrowsuploadOne2IconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function ArrowsuploadOne2Icon(props: ArrowsuploadOne2IconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 280 196"}
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
          "M68.12 82.773c-25.684 4.276-44.787 20.44-44.787 39.727 0 22.551 26.117 40.833 58.334 40.833 5.526 0 10.873-.537 15.94-1.543m112.712-79.017c25.684 4.276 44.787 20.44 44.787 39.727 0 22.551-26.117 40.833-58.334 40.833a81.92 81.92 0 01-15.939-1.543M210 81.667c0-27.062-31.34-49-70-49s-70 21.938-70 49m29.548 32.18L140 85.438l41.603 28.895M140 155.167V99.886"
        }
        stroke={"currentColor"}
        strokeWidth={"4"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  )
}

export default ArrowsuploadOne2Icon
/* prettier-ignore-end */
