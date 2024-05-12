import { FC } from 'react';
import { ImageCardProps } from './ImageCard.types';

const ImageCard: FC<ImageCardProps> = ({ image, onOpen }) => {
  return (
    <div>
      <img
        onClick={() =>
          onOpen({
            bigImg: image.urls.regular,
            imgAltDescription: image.alt_description,
            imgLikes: image.likes,
          })
        }
        src={image.urls.small}
        alt={image.alt_description}
        height={306}
      />
    </div>
  );
};

export default ImageCard;
