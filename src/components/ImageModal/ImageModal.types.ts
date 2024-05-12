import { ReactNode } from 'react';

export type ModalData = {
  bigImg: string;
  imgAltDescription: string;
  imgLikes: number;
};

export type ImageModalProps = {
  isModalOpen: boolean;
  modalData: ModalData;
  closeModal: () => void;
  children?: ReactNode;
};
