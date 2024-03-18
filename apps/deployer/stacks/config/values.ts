import { IConfig } from './types'

export const CONFIG_VALUES: IConfig = {
	secrets: [],
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
