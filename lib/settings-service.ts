// Define the interface that's safe to use in both client and server components
export interface SiteSettings {
	phone: {
		display: string
		href: string
	}
	email: string
	social?: {
		facebook?: string
		twitter?: string
		instagram?: string
		linkedin?: string
	}
	address?: {
		street?: string
		city?: string
		state?: string
		zip?: string
	}
	hours?: string
	display?: {
		showAddressOnContact?: boolean
	}
}

// Default settings as a fallback
export const defaultSettings: SiteSettings = {
	phone: {
		display: '(555) 123-4567',
		href: 'tel:+15551234567',
	},
	email: 'info@verygoodmarketing.com',
	display: {
		showAddressOnContact: false,
	},
}

// Server-only code is moved to settings-actions.ts
