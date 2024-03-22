import { IConfig } from './types'

export const CONFIG_VALUES: IConfig = {
	secrets: [{ name: 'UMAMI_SITE_ID' }],
	parameters: [
		{
			name: 'DEPLOY_STAGE',
			value: {
				dev: 'development',
				demo: 'demo',
				prod: 'production',
			},
		},
	],
}
