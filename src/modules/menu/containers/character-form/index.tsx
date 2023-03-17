import React from 'react';
import { Formik, FormikHelpers } from 'formik';

import { Button } from '../../../../components/button';

import { Form } from '../../components/form';

import { BaseSettingField } from '../base-setting-field';
import { NameField } from '../name-field';

import type { BaseCharacterSettings } from '../../types';

interface IProps {
  initialValues?: BaseCharacterSettings;
  actionTitle: string;
  classFormModifier?: string;
  onSubmit: (values: BaseCharacterSettings) => void;
}

export type FieldName = keyof BaseCharacterSettings;

export const CharacterForm: React.FC<IProps> = React.memo((props) => {
  return (
    <Formik
      initialValues={
        props.initialValues
          ? props.initialValues
          : {
              name: '',
              power: 0,
              dexterity: 0,
              intelligence: 0,
              charisma: 0,
            }
      }
      onSubmit={(
        values: BaseCharacterSettings,
        { resetForm }: FormikHelpers<BaseCharacterSettings>
      ) => {
        resetForm();
        props.onSubmit(values);
      }}
    >
      {({ values, isSubmitting, handleSubmit, setFieldValue }) => {
        const { power, dexterity, intelligence, charisma } = values;
        const min = 0;
        const max = 10;
        // подсчет остатка баллов доступных для распределения
        const surplus = max - (power + dexterity + intelligence + charisma);
        const disabled = !values.name || surplus !== 0; // disabled submit form

        return (
          <Form onSubmit={handleSubmit} class={props.classFormModifier}>
            <NameField
              lable="Имя"
              fieldName="name"
              setFieldValue={setFieldValue}
              disabled={isSubmitting}
            />
            <BaseSettingField
              lable="Сила"
              fieldName="power"
              min={min}
              max={max}
              surplus={surplus}
              setFieldValue={setFieldValue}
              disabled={isSubmitting}
            />
            <BaseSettingField
              lable="Ловкость"
              fieldName="dexterity"
              min={min}
              max={max}
              surplus={surplus}
              setFieldValue={setFieldValue}
              disabled={isSubmitting}
            />
            <BaseSettingField
              lable="Интелект"
              fieldName="intelligence"
              min={min}
              max={max}
              surplus={surplus}
              setFieldValue={setFieldValue}
              disabled={isSubmitting}
            />
            <BaseSettingField
              lable="Харизма"
              fieldName="charisma"
              min={min}
              max={max}
              surplus={surplus}
              setFieldValue={setFieldValue}
              disabled={isSubmitting}
            />
            <Button disabled={disabled} type="submit">
              {props.actionTitle}
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
});
