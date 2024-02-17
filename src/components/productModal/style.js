import React from 'react';
import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  width: 80%;
  max-width: 600px;
  padding: 24px;
  border-radius: 4px;
`;