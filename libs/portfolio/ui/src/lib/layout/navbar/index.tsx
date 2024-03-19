'use client'

import {
	ArrowLeftIcon,
	ArrowTopRightOnSquareIcon,
} from '@heroicons/react/20/solid'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export const NavbarComponent = () => {
	const pathname = usePathname()

	const ref = useRef<HTMLElement>(null)
	const [isIntersecting, setIntersecting] = useState(false)

	useEffect(() => {
		if (!ref.current) return
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting)
		)

		observer.observe(ref.current)
		return () => observer.disconnect()
	}, [])

	if (pathname === '/') return null

	return (
		<header ref={ref}>
			<div
				className={`fixed inset-x-0 top-0 z-50 border-b  backdrop-blur duration-200  ${
					isIntersecting
						? 'border-transparent bg-zinc-900/0'
						: 'bg-zinc-900/500  border-zinc-800 '
				}`}
			>
				<div className='container mx-auto flex flex-row-reverse items-center justify-between p-4 sm:p-6'>
					<div className='flex justify-between gap-5 md:gap-8'>
						<Link
							href='/about'
							className='text-xs text-zinc-400 duration-200 hover:text-zinc-100 hover:underline sm:text-base'
						>
							About Me
						</Link>
						<Link
							href='/contacts'
							className='text-xs text-zinc-400 duration-200 hover:text-zinc-100 hover:underline sm:text-base'
						>
							Contact
						</Link>
						<Link
							href='https://blog.eneascaccabarozzi.xyz'
							target='new'
							className='text-xs text-zinc-400 duration-200 hover:text-zinc-100 hover:underline sm:text-base'
						>
							<span className='flex items-center justify-center gap-1'>
								Blog
								<span>
									<ArrowTopRightOnSquareIcon className='h-3 w-3 sm:h-4 sm:w-4' />
								</span>
							</span>
						</Link>
					</div>

					<Link
						href='/'
						className='text-zinc-300 duration-200 hover:text-zinc-100'
					>
						<ArrowLeftIcon className='h-4 w-4 sm:h-6 sm:w-6' />
					</Link>
				</div>
			</div>
		</header>
	)
}
