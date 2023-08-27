import { render, screen } from '@testing-library/react'
import { ButtonHero } from '.'

const TextMock = 'Text mock'
describe('Button Hero component', () => {
  it('should be correctly', () => {
    render(<ButtonHero>{TextMock}</ButtonHero>)

    expect(screen.getByText('Text mock')).toBeTruthy()
  })
})
