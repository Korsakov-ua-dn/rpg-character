import React from 'react';

import './style.scss';

interface IProps {
  onSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  children: React.ReactNode | React.ReactNode[] | React.ReactElement;
}

export const Form: React.FC<IProps> = React.memo((props) => {
  return (
    <form className="Form" onSubmit={props.onSubmit}>
      {props.children}
    </form>
  );
});
