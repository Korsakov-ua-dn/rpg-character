import React, {
  ChangeEvent,
  KeyboardEvent,
  MouseEvent,
  useCallback,
  useState,
} from 'react';
import { useField } from 'formik';

import { prepareValue } from '../../utils/prepare-value';

import { InputText } from '../../components/input-text';
import { Range } from '../../components/range';
import { FieldWrapper } from '../../components/field-wrapper';

import type { FieldName } from '../add-character-form';

interface IProps {
  lable: string;
  fieldName: FieldName;
  min: number;
  max: number;
  surplus: number;
  disabled: boolean;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
}

export const BaseSettingField: React.FC<IProps> = React.memo((props) => {
  const [field] = useField(props.fieldName);
  const [isActive, setActive] = useState(false);

  const callbacks = {
    onClick: useCallback((e: MouseEvent<HTMLDivElement>) => {
      setActive(true);
    }, []),

    onBlur: useCallback(() => {
      setActive(false);
    }, []),

    onKeyDown: useCallback((e: KeyboardEvent<HTMLInputElement>) => {
      e.key === 'Enter' && callbacks.onBlur();
    }, []),

    rangeChange: useCallback(
      (event: Event, newValue: number | number[]) => {
        if (typeof newValue !== 'object') {
          const max = props.surplus + field.value;
          const value = prepareValue(newValue, props.min, max);
          props.setFieldValue(props.fieldName, value);
        }
      },
      [field.value, props]
    ),

    onChange: useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        const max = props.surplus + field.value;
        const value = prepareValue(e.target.value, props.min, max);
        props.setFieldValue(props.fieldName, value);
      },
      [field.value, props]
    ),
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
        onKeyDown={callbacks.onKeyDown}
        onChange={callbacks.onChange}
        disabled={props.disabled}
      />
      <Range
        aria-label={props.lable}
        min={props.min}
        max={props.max}
        onChange={callbacks.rangeChange}
        value={field.value}
        disabled={props.disabled}
      />
    </FieldWrapper>
  );
});
