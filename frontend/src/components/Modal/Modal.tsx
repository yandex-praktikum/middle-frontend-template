import React, { FC, PropsWithChildren } from 'react';
import Title from '../../components/Title';

import { BackdropSt, WrapperSt, ModalSt } from './style';

interface ModalProps {
  isShown?: boolean;
  hide?: () => void;
  headerText?: string;
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({
  isShown,
  children,
  hide,
  headerText,
}) => {
  if (!isShown) {
    return null;
  }

  return (
    <>
      <BackdropSt onClick={hide} />
      <WrapperSt>
        <ModalSt>
          <Title h={4} center>{headerText}</Title>
          {children}
        </ModalSt>
      </WrapperSt>
    </>
  );
};
export default Modal;
