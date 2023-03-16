import { FieldInputProps } from 'formik';
import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import './style.scss';

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
type PropsType = DefaultInputPropsType & {
  formikProps: FieldInputProps<number>;
  isActive: boolean;
};

export const InputText: React.FC<PropsType> = React.memo(
  ({ formikProps, isActive, ...restProps }) => {
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
  }
);
