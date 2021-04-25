// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type CampaignIconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function CampaignIcon(props: CampaignIconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 236.108 236.108"}
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
          "M7.5 69.21a7.5 7.5 0 00-7.5 7.5v58.54a7.5 7.5 0 0015 0V76.71a7.5 7.5 0 00-7.5-7.5zm158.928-43.751h-31.204a7.5 7.5 0 00-7.5 7.5v6.775L27.289 69.517a7.5 7.5 0 00-5.368 7.19v58.512c-.002.375.034.753.09 1.132a7.002 7.002 0 00.253 1.137l21.261 67.9a7.503 7.503 0 007.155 5.261c.741 0 1.495-.111 2.24-.344l30.961-9.681a7.5 7.5 0 004.919-9.398l-10.536-33.669 49.459 14.67v6.774a7.5 7.5 0 007.5 7.5h31.204a7.5 7.5 0 007.5-7.5V32.959a7.499 7.499 0 00-7.499-7.5zM72.245 188.546l-16.646 5.205-14.814-47.311 20.154 5.977 11.306 36.129zm-3.167-49.359l-.064-.019-32.092-9.519V82.306l90.803-26.926v101.202l-58.647-17.395zm89.85 32.315h-16.204V40.46h16.204v131.042zm66.034-23.533L192.51 131.74a7.5 7.5 0 00-6.709 13.417l32.452 16.229a7.5 7.5 0 0010.063-3.354 7.502 7.502 0 00-3.354-10.063zm-35.801-66.957a7.458 7.458 0 003.348-.794l32.453-16.227a7.5 7.5 0 003.354-10.062 7.5 7.5 0 00-10.062-3.354l-32.453 16.227a7.5 7.5 0 00-3.354 10.062 7.499 7.499 0 006.714 4.148zm39.447 17.468H201.51a7.5 7.5 0 000 15h27.098a7.5 7.5 0 000-15z"
        }
      ></path>
    </svg>
  )
}

export default CampaignIcon
/* prettier-ignore-end */
