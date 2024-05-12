import { useState, useEffect } from 'react';
import { getImages } from '../../imagesAPI';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import toast, { Toaster } from 'react-hot-toast';

import { ModalData } from '../ImageModal/ImageModal.types';
import { Image } from '../../common.types';

export default function App() {
  const [images, setImages] = useState<Image[]>([]);
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [query, setQuery] = useState<string>('');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ModalData>({
    bigImg: '',
    imgAltDescription: '',
    imgLikes: 0,
  });

  async function searchImages(inputValue: string) {
    setQuery(`${Date.now()}/${inputValue}`);
    setImages([]);
    setPage(1);
  }

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function fetchImages(): Promise<void> {
      try {
        setLoader(true);
        setError(false);
        const data = await getImages(query, page);
        if (!data.results.length) {
          toast.error('No images found. Try another request', {
            position: 'top-right',
          });
        }
        setImages(prevImages => [...prevImages, ...data.results]);
        setTotalPages(data.total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    fetchImages();
  }, [query, page]);

  function handleLoadMore(): void {
    setPage(page + 1);
  }

  function openModal(info: ModalData): void {
    setIsModalOpen(true);
    setModalData(info);
  }

  function closeModal(): void {
    setIsModalOpen(false);
    setModalData({
      bigImg: '',
      imgAltDescription: '',
      imgLikes: 0,
    });
  }

  return (
    <>
      <Toaster />
      <SearchBar onSubmit={searchImages} />
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      <ImageModal
        isModalOpen={isModalOpen}
        modalData={modalData}
        closeModal={closeModal}
      />
      {loader && <Loader />}
      {images.length > 0 && !loader && totalPages > page && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
      {error && <ErrorMessage />}
    </>
  );
}
