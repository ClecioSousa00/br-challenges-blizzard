import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import { NavBar } from '.'

describe('NavBar', () => {
  describe('Menu', () => {
    it(' check if it applies the correct class in the mobile menu', () => {
      render(<NavBar />)

      const menu = screen.getByRole('navigation')
      const buttonMenu = screen.getByTestId('button-toggle')
      fireEvent.click(buttonMenu)

      expect(menu).toHaveClass('w-screen')
    })
  })
  describe('Modal', () => {
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
  })
})
