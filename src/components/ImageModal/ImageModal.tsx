import css from './ImageModal.module.css';
import Modal from 'react-modal';
import { ImageModalProps } from './ImageModal.types';
import { FC } from 'react';

Modal.setAppElement('#root');

const ImageModal: FC<ImageModalProps> = ({
  isModalOpen,
  modalData: { bigImg, imgAltDescription, imgLikes },
  closeModal,
}) => {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      className={css.modalContent}
      overlayClassName={css.modalOverlay}
    >
      <div>
        <img src={bigImg} alt={imgAltDescription} />
        <div className={css.modalInfo}>
          <p>{imgAltDescription}</p>
          <p>
            <b>Likes: </b>
            {imgLikes}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default ImageModal;
