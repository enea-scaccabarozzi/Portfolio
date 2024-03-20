import { NextjsSite, StackContext, use } from 'sst/constructs'

import { Configs } from '../config'

export const Blog = ({ stack }: StackContext) => {
	const BASE_DOMAIN = 'eneascaccabarozzi.xyz'
	let domainName: string

	switch (process.env.SST_STAGE) {
		case 'prod':
			domainName = `blog.${BASE_DOMAIN}`
			break
		case 'demo':
			domainName = `demo.blog.${BASE_DOMAIN}`
			break
		default:
			domainName =
				'DURING LOCAL DEVELOPMENT NO DOMAIN IS USED, ALL TRAFFIC WILL GO TRHOUGH LOCALHOST'
	}

	const blog = new NextjsSite(stack, 'blog', {
		bind: [...use(Configs).config],
		path: './apps/blog',
		buildCommand: 'pnpm nx build blog --skip-nx-cache',
		customDomain: {
			domainName,
			hostedZone: BASE_DOMAIN,
		},
	})

	stack.addOutputs({
		url: blog.customDomainUrl ?? blog.url,
	})
}
