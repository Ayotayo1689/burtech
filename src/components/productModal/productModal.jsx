import React from 'react'
import {ModalWrapper, ModalContent} from './style'


function productModal({children, isOpen}) {

    if (!isOpen) return null;

  return (
    <ModalWrapper>
      <ModalContent>{children}</ModalContent>
    </ModalWrapper>
  )
}

export default productModal