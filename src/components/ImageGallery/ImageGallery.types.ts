import { ReactNode } from 'react';
import { Image } from '../../common.types';
import { ModalData } from '../ImageModal/ImageModal.types';

export type ImageGalleryProps = {
  images: Image[];
  openModal: (info: ModalData) => void;
  children?: ReactNode;
};
