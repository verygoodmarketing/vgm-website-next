"use client"

import Script from "next/script"

export default function HubspotScript() {
  return (
    <Script
      id="hs-script-loader"
      strategy="afterInteractive"
      src="//js.hs-scripts.com/45346445.js"
    />
  )
}