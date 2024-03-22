import { Metadata } from 'next'

import { ContactsPage } from '@portfolio/portfolio-features/server'

export const metadata: Metadata = {
	title: 'Contact | Enea Scaccabarozzi',
	description:
		"Contact me for any reason, I am always happy to help and to hear from you. Let's build something amazing!",
}

export default function Page() {
	return <ContactsPage />
}
