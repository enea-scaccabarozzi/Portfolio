import { StackContext } from 'sst/constructs'

import { Portfolio } from './stacks/apps/portfolio'
import { Configs } from './stacks/config'
import { IAM } from './stacks/iam'

export const RootStack = ({ app }: StackContext) => {
	// Configs Stack
	app.stack(Configs)

	// IAM Stack
	app.stack(IAM)

	// Apps Stacks
	app.stack(Portfolio)
}
