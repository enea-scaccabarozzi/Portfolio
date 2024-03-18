export interface IParameter {
	name: string
	value: {
		dev: any
		demo: any
		prod: any
	}
}

export interface ISecret {
	name: string
}

export interface IConfig {
	parameters: IParameter[]
	secrets: ISecret[]
}
