import React from 'react';

import { Popup } from '../../../../components/popup';
import { CharacterForm } from '../../../menu';
import { BaseCharacterSettings, Character } from '../../../menu/types';

import './style.scss';

interface IProps {
  onClose: (values?: BaseCharacterSettings) => void;
  character?: Character;
}

export const EditCharacter: React.FC<IProps> = React.memo(
  ({ onClose, character }) => {
    if (character === undefined) return null;

    const { name, power, dexterity, intelligence, charisma } = character;
    const initialValues = {
      name,
      power,
      dexterity,
      intelligence,
      charisma,
    };

    return (
      <Popup onClose={onClose}>
        <CharacterForm
          onSubmit={onClose}
          initialValues={initialValues}
          actionTitle="Редактировать"
          classFormModifier="Form_edit-character"
        />
      </Popup>
    );
  }
);
