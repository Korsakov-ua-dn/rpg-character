import React, { MouseEvent } from 'react';

import './style.scss';

interface IProps {
  lable: string;
  disabled: boolean;
  isActive: boolean;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
  onBlur: () => void;
  children: React.ReactNode | React.ReactNode[];
}

export const FieldWrapper: React.FC<IProps> = React.memo((props) => {
  const ClassN = `
    Form__field Setting-field
    ${props.isActive ? 'active' : ''}
    ${props.disabled ? 'disabled' : ''}
  `;

  return (
    <div className={ClassN} onClick={props.onClick} onBlur={props.onBlur}>
      <label className="Form__lable">{props.lable}</label>
      <div className="Setting-field__inputs-wrapper">{props.children}</div>
    </div>
  );
});
