import { FC } from 'react';
import css from './LoadMoreBtn.module.css';
import { LoadMoreBtnProps } from './LoadMoreBtn.types';

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({
  onLoadMore,
}: LoadMoreBtnProps) => {
  return (
    <div className={css.loadMoreBtnWrapper}>
      <button className={css.loadMoreBtn} type="button" onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
