import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
} from "react-bootstrap"

import type { DeleteModalState } from "../model/use-delete-modal"

type Props = {
  state: DeleteModalState
  onDelete?: () => void
}

export const ConfirmDeleteModal = ({
  state: { isOpen, close },
  onDelete,
}: Props) => {
  return (
    <Modal
      show={isOpen}
      onHide={close}
      centered
      contentClassName="bg-dark text-light"
    >
      <ModalHeader>
        <ModalTitle>Confirm Removal</ModalTitle>
      </ModalHeader>
      <ModalBody>
        Are you sure you want to remove this city from your favorites?
      </ModalBody>
      <ModalFooter>
        <Button variant="secondary" onClick={close}>
          Cancel
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            onDelete?.()
            close()
          }}
        >
          Remove
        </Button>
      </ModalFooter>
    </Modal>
  )
}
