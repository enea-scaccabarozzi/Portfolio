import { NextjsSite, StackContext, use } from 'sst/constructs'

import { Configs } from '../config'

export const Portfolio = ({ stack }: StackContext) => {
	const BASE_DOMAIN = 'eneascaccabarozzi.xyz'
	let domainName: string

	switch (process.env.SST_STAGE) {
		case 'prod':
			domainName = `${BASE_DOMAIN}`
			break
		case 'demo':
			domainName = `demo.${BASE_DOMAIN}`
			break
		default:
			domainName =
				'DURING LOCAL DEVELOPMENT NO DOMAIN IS USED, ALL TRAFFIC WILL GO TRHOUGH LOCALHOST'
	}

	const portfolio = new NextjsSite(stack, 'portfolio', {
		bind: [...use(Configs).config],
		path: './apps/portfolio',
		buildCommand: 'pnpm nx build portfolio --skip-nx-cache',
		customDomain: {
			domainName,
			hostedZone: BASE_DOMAIN,
		},
	})

	stack.addOutputs({
		url: portfolio.customDomainUrl ?? portfolio.url,
	})
}
