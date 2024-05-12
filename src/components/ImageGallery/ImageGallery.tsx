import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';
import { ImageGalleryProps } from './ImageGallery.types';
import { FC } from 'react';

const ImageGallery: FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className={css.imagesList}>
      {images.map(image => (
        <li className={css.imagesListItem} key={image.id}>
          <ImageCard image={image} onOpen={openModal} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
