import React from 'react';
import { Formik, FormikHelpers } from 'formik';
import { useNavigate } from 'react-router';

import { Button } from '../../../../components/button';

import Form from '../../components/form';
import { Character } from '../../character-slice';

import BaseSettingField from '../base-setting-field';
import NameField from '../name-field';

interface IProps {
  addCharacter: (character: Character) => void;
}

interface FormikState {
  name: string;
  power: number;
  dexterity: number;
  intelligence: number;
  charisma: number;
}

export type FieldName = keyof FormikState;

export const AddCharacterForm: React.FC<IProps> = React.memo((props) => {
  // const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        name: '',
        power: 0,
        dexterity: 0,
        intelligence: 0,
        charisma: 0,
      }}
      onSubmit={(
        values: FormikState,
        { resetForm }: FormikHelpers<FormikState>
      ) => {
        resetForm();
        // alert(JSON.stringify(values, null, 2));
        props.addCharacter({ id: '1', ...values });
        // navigate('/game');
      }}
    >
      {({ values, isSubmitting, handleSubmit, setFieldValue }) => {
        const { power, dexterity, intelligence, charisma } = values;
        const min = 0;
        const max = 100;
        // подсчет остатка баллов доступных для распределения
        const surplus = 100 - (power + dexterity + intelligence + charisma);

        return (
          <Form onSubmit={handleSubmit}>
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
            <Button type="submit">Добавить персонаж</Button>
          </Form>
        );
      }}
    </Formik>
  );
});
