import React, { MouseEvent, useCallback, useState } from 'react';
import { useField } from 'formik';

import { InputText } from '../../components/input-text';
import { FieldWrapper } from '../../components/field-wrapper';

import type { FieldName } from '../add-character-form';

interface IProps {
  lable: string;
  fieldName: FieldName;
  disabled: boolean;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
}

const NameField: React.FC<IProps> = (props) => {
  const [field] = useField(props.fieldName);
  const [isActive, setActive] = useState(false);

  const callbacks = {
    onClick: useCallback((e: MouseEvent<HTMLDivElement>) => {
      setActive(true);
    }, []),

    onBlur: useCallback(() => {
      setActive(false);
    }, []),
  };

  return (
    <FieldWrapper
      lable={props.lable}
      disabled={props.disabled}
      isActive={isActive}
      onClick={callbacks.onClick}
      onBlur={callbacks.onBlur}
    >
      <InputText
        formikProps={field}
        isActive={isActive}
        disabled={props.disabled}
      />
    </FieldWrapper>
  );
};

export default React.memo(NameField) as typeof NameField;
