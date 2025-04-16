import Cal, { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'
export default function MyApp() {
	useEffect(() => {
		;(async function () {
			const cal = await getCalApi({ namespace: '15min' })
			cal('ui', {
				cssVarsPerTheme: { light: { 'cal-brand': '#12279b' }, dark: { 'cal-brand': '#6d749b' } },
				hideEventTypeDetails: false,
				layout: 'month_view',
			})
		})()
	}, [])
	return (
		<Cal
			namespace="15min"
			calLink="vgm-brad/15min"
			style={{
				width: '100%',
				height: '600px',
				overflow: 'scroll',
				border: '1px solid oklch(.928 .006 264.531)',
				borderRadius: '10px',
			}}
			config={{ layout: 'month_view' }}
		/>
	)
}
