import Script from 'next/script'

// Replace with your actual Google Analytics measurement ID
const GA_MEASUREMENT_ID = 'G-FFP4ZQGXGM'

export default function GoogleAnalytics() {
	return (
		<>
			{/* Google Analytics */}
			<Script
				src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
				strategy="afterInteractive"
			/>
			<Script
				id="google-analytics"
				strategy="afterInteractive"
			>
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
			</Script>
		</>
	)
}
