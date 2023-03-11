import React, { MouseEvent } from 'react';

import './style.scss';

type PropsType = {
  lable: string;
  disabled: boolean;
  isActive: boolean;
  onClick: (e: MouseEvent<HTMLDivElement>) => void;
  onBlur: () => void;
  children: React.ReactNode | React.ReactNode[];
};

const FieldWrapper: React.FC<PropsType> = (props) => {
  const ClassN = `
    Form__field Setting-field
    ${props.isActive ? 'active' : ''}
    ${props.disabled ? 'disabled' : ''}
  `;

  return (
    <div
      className={ClassN}
      onClick={!props.disabled ? props.onClick : () => {}}
      onBlur={props.onBlur}
    >
      <label className="Form__lable">{props.lable}</label>
      <div className="Setting-field__inputs-wrapper">{props.children}</div>
    </div>
  );
};

export default React.memo(FieldWrapper) as typeof FieldWrapper;
