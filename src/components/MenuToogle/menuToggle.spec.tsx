import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { MenuToogle } from '.'

const handleMenu = jest.fn()
describe('MenuToggle', () => {
  it('should applies correct classes to span when menuIsOpen is true', () => {
    render(<MenuToogle handleMenu={handleMenu} menuIsOpen={true} />)
    const spanElements = screen.getAllByTestId('span')
    expect(spanElements[0]).toHaveClass(
      'translate-y-[6px] -rotate-45 transform',
    )
    expect(spanElements[1]).toHaveClass('w-0 opacity-0')
    expect(spanElements[2]).toHaveClass(
      '-translate-y-[5px]  rotate-45 transform',
    )
  })

  it('should click the button and open the mobile menu', () => {
    render(<MenuToogle handleMenu={handleMenu} menuIsOpen={false} />)

    const button = screen.getByRole('button')
    fireEvent.click(button)
    const spanElements = screen.getAllByTestId('span')
    waitFor(() =>
      expect(spanElements[0]).toHaveClass(
        'translate-y-[6px] -rotate-45 transform',
      ),
    )
  })
})
