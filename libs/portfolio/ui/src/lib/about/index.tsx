import Link from 'next/link'

import { BackgroundBeams } from '@portfolio/shared-ui'
import { RainbowAccentButton } from '@portfolio/shared-ui/server'

export const AboutPageComponent = () => {
	return (
		<div className='bg-neutral-950 relative flex h-[40rem] w-full flex-col items-center justify-center rounded-md antialiased'>
			<div className='mx-auto max-w-2xl p-4'>
				<h1 className='relative z-10 bg-gradient-to-b from-slate-200  to-slate-600 bg-clip-text p-3 text-center font-sans  text-lg font-bold text-transparent md:text-5xl'>
					Hi, How It's Going?
				</h1>
				<p></p>
				<p className='relative z-10 mx-auto my-4 max-w-lg text-center text-sm text-slate-500'>
					Hey there! I'm Enea, a self-taught web and mobile developer with a
					knack for turning curiosity into digital solutions. I dive deep into
					cybersecurity, groove to techno music, and thrive on tech challenges.
					Currently having a blast as a fullstack dev at{' '}
					<Link
						href='https://www.apuliasoft.com/'
						className='underline transition hover:text-slate-300'
					>
						ApuliaSoft
					</Link>{' '}
					and{' '}
					<Link
						href='https://getswitch.io/'
						className='underline transition hover:text-slate-300'
					>
						Switch
					</Link>
					. When off the clock, I'm hunting down the latest DX trends to make
					the life of developers easier.
					<br />
					Got a project or idea? Let's connect and create something amazing!
				</p>

				<div className='mt-5 flex w-full items-center justify-center'>
					<RainbowAccentButton label='Get In Touch' href='contacts' />
				</div>
			</div>
			<BackgroundBeams />
		</div>
	)
}
