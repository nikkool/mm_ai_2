// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type ImportListIconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function ImportListIcon(props: ImportListIconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 502 502"}
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
          "M81.5 174H247c5.523 0 10-4.477 10-10s-4.477-10-10-10H81.5c-5.523 0-10 4.477-10 10s4.477 10 10 10zm225 46h-225c-5.523 0-10 4.477-10 10s4.477 10 10 10h225c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 66h-225c-5.523 0-10 4.477-10 10s4.477 10 10 10h225c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0 66h-225c-5.523 0-10 4.477-10 10s4.477 10 10 10h225c5.523 0 10-4.477 10-10s-4.477-10-10-10zm0-198h-22c-5.523 0-10 4.477-10 10s4.477 10 10 10h22c5.523 0 10-4.477 10-10s-4.477-10-10-10z"
        }
      ></path>

      <path
        d={
          "M481 379.417h-47.713A4.292 4.292 0 01429 375.13v-9.98a24.214 24.214 0 00-14.993-22.438 24.216 24.216 0 00-26.468 5.265L377 358.516V103c0-2.652-1.054-5.196-2.929-7.071l-93-93A10.001 10.001 0 00274 0H21c-5.523 0-10 4.477-10 10v482c0 5.523 4.477 10 10 10h346c5.523 0 10-4.477 10-10v-7.681l10.539 10.539a24.222 24.222 0 0026.468 5.264A24.216 24.216 0 00429 477.684v-9.98a4.292 4.292 0 014.287-4.287H481c5.523 0 10-4.477 10-10v-64c0-5.523-4.477-10-10-10zM284 34.142L342.858 93H284V34.142zM357 482H31V20h233v83c0 5.523 4.477 10 10 10h83v265.516l-35.831 35.83a10.005 10.005 0 00-2.929 7.071c0 2.652 1.054 5.196 2.929 7.071L357 464.319V482zm114-38.583h-37.713c-13.392 0-24.287 10.895-24.287 24.287v9.98c0 2.493-1.658 3.551-2.646 3.961-.99.409-2.911.833-4.672-.93l-59.299-59.298 59.298-59.298c1.763-1.762 3.684-1.338 4.672-.929.988.409 2.646 1.468 2.646 3.96v9.98c0 13.392 10.895 24.287 24.287 24.287H471v44z"
        }
      ></path>
    </svg>
  )
}

export default ImportListIcon
/* prettier-ignore-end */
