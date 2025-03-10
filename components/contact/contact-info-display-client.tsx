"use client"

import { SiteSettings } from "@/lib/settings-service"
import ContactInfoDisplay from "./contact-info-display"

interface ContactInfoDisplayClientProps {
  settings: SiteSettings
}

export default function ContactInfoDisplayClient({ settings }: ContactInfoDisplayClientProps) {
  return <ContactInfoDisplay settings={settings} />
}