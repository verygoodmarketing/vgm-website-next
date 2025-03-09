import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    hubspot: {
      portalId: process.env.HUBSPOT_PORTAL_ID,
      formId: process.env.HUBSPOT_FORM_ID,
    },
    calendly: {
      url: process.env.CALENDLY_URL,
    },
  })
}

