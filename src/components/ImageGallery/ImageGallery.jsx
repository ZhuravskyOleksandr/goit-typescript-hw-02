import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ images, openModal }) {
  return (
    <ul className={css.imagesList}>
      {images.map(image => (
        <li className={css.imagesListItem} key={image.id}>
          <ImageCard image={image} onOpen={openModal} />
        </li>
      ))}
    </ul>
  );
}
