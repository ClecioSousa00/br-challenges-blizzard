import { fireEvent, render, screen } from '@testing-library/react'
import { Modal } from '.'

describe('Modal component', () => {
  it('should be show modal', () => {
    const onClick = jest.fn()
    render(<Modal showModal={onClick} />)

    const buttonClose = screen.getByTestId('button-close')

    fireEvent.click(buttonClose)

    expect(onClick).toBeCalled()
  })
})
