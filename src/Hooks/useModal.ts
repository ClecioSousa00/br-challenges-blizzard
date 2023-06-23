import { useState } from 'react'

export const useModal = () => {
  const [openModal, setOpenModal] = useState(false)
  const showModal = () => {
    setOpenModal(!openModal)
  }
  return {
    openModal,
    showModal,
  }
}
