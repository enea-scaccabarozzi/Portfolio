export interface IParameter {
	name: string
	value: {
		dev: string | number | boolean
		demo: string | number | boolean
		prod: string | number | boolean
	}
}

export interface ISecret {
	name: string
}

export interface IConfig {
	parameters: IParameter[]
	secrets: ISecret[]
}
