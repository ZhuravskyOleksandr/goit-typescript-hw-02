import { useState, useEffect } from 'react';
import { getImages } from '../../imagesAPI';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMesage/ErrorMesage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import toast, { Toaster } from 'react-hot-toast';

export default function App() {
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState({
    isModalOpen: false,
    bigImg: '',
    imgAltDescription: '',
    imgLikes: 0,
  });

  async function searchImages(inputValue) {
    setQuery(`${Date.now()}/${inputValue}`);
    setImages([]);
    setPage(1);
  }

  useEffect(() => {
    if (query === '') {
      return;
    }

    async function fetchImages() {
      try {
        setLoader(true);
        setError(false);
        const data = await getImages(query, page);
        if (!data.data.results.length) {
          toast.error('No images found. Try another request', {
            position: 'top-right',
          });
        }
        setImages(prevImages => [...prevImages, ...data.data.results]);
        setTotalPages(data.data.total_pages);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    }
    fetchImages();
  }, [query, page]);

  function handleLoadMore() {
    setPage(page + 1);
  }

  function openModal(info) {
    setIsOpen(info);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Toaster />
      <SearchBar onSubmit={searchImages} />
      {images.length > 0 && (
        <ImageGallery images={images} openModal={openModal} />
      )}
      <ImageModal isOpen={isOpen} closeModal={closeModal} />
      {loader && <Loader />}
      {images.length > 0 && !loader && totalPages > page && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
      {error && <ErrorMessage />}
    </>
  );
}
