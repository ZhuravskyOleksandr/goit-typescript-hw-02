import css from './LoadMoreBtn.module.css';

export default function LoadMoreBtn({ onLoadMore }) {
  return (
    <div className={css.loadMoreBtnWrapper}>
      <button className={css.loadMoreBtn} type="button" onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
}
