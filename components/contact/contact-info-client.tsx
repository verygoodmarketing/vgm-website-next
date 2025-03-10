"use client"

import { SiteSettings } from "@/lib/settings-service"
import ContactInfoDisplayClient from "./contact-info-display-client"

interface ContactInfoClientProps {
  settings: SiteSettings
}

export default function ContactInfoClient({ settings }: ContactInfoClientProps) {
  return <ContactInfoDisplayClient settings={settings} />
}