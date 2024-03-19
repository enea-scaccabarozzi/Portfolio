import { render } from '@testing-library/react'

import PortfolioFeatures from './portfolio-features'

describe('PortfolioFeatures', () => {
	it('should render successfully', () => {
		const { baseElement } = render(<PortfolioFeatures />)
		expect(baseElement).toBeTruthy()
	})
})
