import css from './SearchBar.module.css';
import toast from 'react-hot-toast';
import { PiSealWarningBold } from 'react-icons/pi';
import { FiSearch } from 'react-icons/fi';
import { FC, FormEvent } from 'react';
import { SearchBarProps } from './SearchBarProps.types';

const SearchBar: FC<SearchBarProps> = ({ onSubmit }) => {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const queryInput = event.currentTarget.elements.namedItem(
      'query'
    ) as HTMLInputElement;

    if (queryInput.value.trim() === '') {
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
    onSubmit(queryInput.value);
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
};

export default SearchBar;
