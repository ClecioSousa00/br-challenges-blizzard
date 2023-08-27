import { fireEvent, render, screen } from '@testing-library/react'
import { ButtonLogin } from '.'

describe('Button login', () => {
  it('should call onClick prop showModal', () => {
    const onClick = jest.fn()
    render(<ButtonLogin showModal={onClick} />)

    const buttonLogin = screen.getByRole('button')

    fireEvent.click(buttonLogin)

    expect(onClick).toHaveBeenCalled()
  })
})
