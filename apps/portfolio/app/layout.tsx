import { Inter as FontSans } from 'next/font/google'
import { Config } from 'sst/node/config'

import { cn } from '@portfolio/utils'
import { NavbarComponent } from '@portfolio/portfolio-ui'

import './global.css'

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
})

export const metadata = {
	title: 'Enea Scaccabarozzi',
	description: 'TODO: Add description',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body
				className={cn(
					'bg-background min-h-screen bg-slate-900 font-sans antialiased',
					fontSans.variable
				)}
			>
				<script
					defer
					src='https://analytics.eu.umami.is/script.js'
					data-website-id={Config.UMAMI_SITE_ID}
				></script>

				<NavbarComponent />
				{children}
			</body>
		</html>
	)
}
