import Link from 'next/link'

import { items } from './items'
import { Card } from './card'

export const ContactsPageComponent = () => {
	return (
		<div className=' bg-gradient-to-tl from-slate-900/0 via-slate-900 to-slate-900/0'>
			<div className='container mx-auto flex min-h-screen items-center justify-center px-4'>
				<div className='mx-auto mt-32 grid w-full grid-cols-1 gap-8 sm:mt-0 md:grid-cols-3 md:py-14 lg:gap-16'>
					{items.map((s, i) => (
						<Card key={i}>
							<Link
								href={s.href}
								target='_blank'
								className='group relative flex flex-col items-center gap-4 p-4 duration-700 md:gap-8 md:p-16  md:py-24  lg:pb-48'
							>
								<span
									className='absolute h-2/3 w-px bg-gradient-to-b from-slate-500 via-slate-500/50 to-transparent'
									aria-hidden='true'
								/>
								<span className='drop-shadow-orange relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-slate-500 bg-slate-900 text-sm text-slate-200 duration-1000 group-hover:border-slate-200 group-hover:bg-slate-900 group-hover:text-white'>
									{s.icon}
								</span>{' '}
								<div className='z-10 flex flex-col items-center'>
									<span className='font-display text-xs font-medium text-slate-200 duration-150 group-hover:text-white xl:text-xl'>
										{s.label}
									</span>
									<span className='mt-4 text-center text-xs text-slate-400 duration-1000 group-hover:text-slate-200'>
										{s.handle}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	)
}
