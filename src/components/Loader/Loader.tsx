import { FC } from 'react';
import css from './Loader.module.css';
import { Blocks } from 'react-loader-spinner';

const Loader: FC = () => {
  return (
    <div className={css.blocksLoader}>
      <Blocks
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="blocks-loading"
        visible={true}
      />
    </div>
  );
};

export default Loader;
