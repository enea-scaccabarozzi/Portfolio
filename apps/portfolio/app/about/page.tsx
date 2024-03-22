import { Metadata } from 'next'

import { AboutPage } from '@portfolio/portfolio-features/server'

export const metadata: Metadata = {
	title: 'About | Enea Scaccabarozzi',
	description:
		"That's me! I am a student and a developer, passionate about technology and innovation. I love to learn and to share my knowledge with others. I am always looking for new opportunities and challenges. Let's build something amazing!",
}

export default function Page() {
	return <AboutPage />
}
