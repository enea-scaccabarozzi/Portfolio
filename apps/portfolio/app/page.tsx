import { Metadata } from 'next'

import { LandingPage } from '@portfolio/portfolio-features/server'

export const metadata: Metadata = {
	title: 'Portfolio | Enea Scaccabarozzi',
	description:
		'My personal portfolio, sharing my work and experiences and experimenting with new technologies.',
}

export default function Page() {
	return <LandingPage />
}
