import { useState } from "react"

export const useDeleteModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }
}

export type DeleteModalState = ReturnType<typeof useDeleteModal>
