import { PageTransitionComponent } from '@portfolio/portfolio-ui'

export default function Template({ children }: { children: React.ReactNode }) {
	return (
		<PageTransitionComponent rootPath='/'>{children}</PageTransitionComponent>
	)
}
