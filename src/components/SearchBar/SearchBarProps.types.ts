import { ReactNode } from 'react';

export type SearchBarProps = {
  onSubmit: (inputValue: string) => void;
  children?: ReactNode;
};
