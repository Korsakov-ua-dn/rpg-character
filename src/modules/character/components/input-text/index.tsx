import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import './style.scss';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
type PropsType = DefaultInputPropsType & {
  formikProps: any;
  isActive: boolean;
};

const InputText: React.FC<PropsType> = ({
  formikProps,
  isActive,
  ...restProps
}) => {
  /* вытащил value для того что бы инпут стал неуправляемым
     это позволит удобно редактировать данные пользователю */
  const { value, ...rest } = formikProps;

  return (
    <div className="Input-text">
      {isActive ? (
        <input
          type="text"
          {...rest}
          {...restProps}
          autoFocus
          defaultValue={value}
        />
      ) : (
        <span className="Input-text__view">{value}</span>
      )}
    </div>
  );
};

export default React.memo(InputText) as typeof InputText;
