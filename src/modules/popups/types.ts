import { EditCharacter } from './components/edit-caracter';

export enum POPUPS {
  editCharacter = 'edit-caracter',
}

export const popups = {
  [POPUPS.editCharacter]: EditCharacter,
};

export type PopupsNameType = keyof typeof popups;

type RequiredPopupType = {
  name: PopupsNameType;
  onClose: (result: any) => void;
};

type OptionalPopupType = {
  [key: string]: any;
};

export type CommonPopupType = RequiredPopupType & OptionalPopupType;
