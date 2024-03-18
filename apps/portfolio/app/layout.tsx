import './global.css'

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
			<body>{children}</body>
		</html>
	)
}
