import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import { NavBar } from '.'

describe('Nav Bar component', () => {
  it('must check if the modal is closed', () => {
    render(<NavBar />)

    const modal = screen.queryByTestId('modal')

    expect(modal).toBeNull()
  })

  it('should open modal when click login button', () => {
    render(<NavBar />)

    const modal = screen.queryByTestId('modal')
    const loginButton = screen.getByTestId('button-login')
    fireEvent.click(loginButton)

    waitFor(() => expect(modal).not.toBeNull())
  })

  it('should check if the modal is closed when clicking on the close button', () => {
    render(<NavBar />)

    const modal = screen.queryByTestId('modal')
    const loginButton = screen.getByTestId('button-login')
    fireEvent.click(loginButton)

    waitFor(() => expect(modal).not.toBeNull())

    const buttonClose = screen.getByTestId('button-close')
    fireEvent.click(buttonClose)

    waitFor(() => expect(modal).toBeNull())
  })
})
