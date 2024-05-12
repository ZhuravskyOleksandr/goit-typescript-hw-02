import { ReactNode } from 'react';
import { Image } from '../../common.types';
import { ModalData } from '../ImageModal/ImageModal.types';

export type ImageCardProps = {
  image: Image;
  onOpen: (info: ModalData) => void;
  children?: ReactNode;
};
