'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

interface IProps {
	children: React.ReactNode
	rootPath: string
}

export const PageTransitionComponent = ({ children, rootPath }: IProps) => {
	const isReverse = usePathname() === rootPath

	return (
		<motion.div
			variants={{
				hidden: { x: isReverse ? -500 : 500, y: 0 },
				enter: { x: 0, y: 0 },
			}}
			initial='hidden'
			animate='enter'
			transition={{ type: 'spring', duration: 1.2 }}
		>
			{children}
		</motion.div>
	)
}
