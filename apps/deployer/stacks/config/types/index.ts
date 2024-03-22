export interface IParameter {
	name: string
	value: {
		dev: string
		demo: string
		prod: string
	}
}

export interface ISecret {
	name: string
}

export interface IConfig {
	parameters: IParameter[]
	secrets: ISecret[]
}
