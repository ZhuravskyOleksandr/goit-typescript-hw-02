import css from './SearchBar.module.css';
import toast from 'react-hot-toast';
import { PiSealWarningBold } from 'react-icons/pi';
import { FiSearch } from 'react-icons/fi';

export default function SearchBar({ onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    if (event.currentTarget.elements.query.value.trim() === '') {
      toast('Please enter the text to search images', {
        icon: <PiSealWarningBold color="blue" size={22} />,
        style: {
          background: 'lightblue',
          color: 'dark',
        },
        position: 'top-right',
      });
      return;
    }
    onSubmit(event.currentTarget.elements.query.value);
    event.currentTarget.reset();
  }

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit}>
        <div className={css.searchInputWrapper}>
          <input
            className={css.searchInput}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />

          <button className={css.searchBtn} type="submit">
            <FiSearch size={18} />
          </button>
        </div>
      </form>
    </header>
  );
}
