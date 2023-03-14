import { v1 } from 'uuid';

import {
  BaseCharacterSettings,
  Character,
} from '../modules/character/character-slice';

export function createCharacter(values: BaseCharacterSettings): Character {
  const character: Character = {
    id: v1(),
    lifeForce: {
      title: 'Жизненная сила',
      value: 3 + values.power,
    } as const,
    evasion: {
      title: 'Уклонение',
      value: 10 + values.dexterity,
    } as const,
    energy: {
      title: 'Энергичность',
      value: values.dexterity + values.intelligence,
    } as const,
    skills: [
      { title: 'Атака', value: 0, maxValue: values.power } as const,
      { title: 'Стелс', value: 0, maxValue: values.dexterity } as const,
      {
        title: 'Стрельба из лука',
        value: 0,
        maxValue: values.dexterity,
      } as const,
      {
        title: 'Обучаемость',
        value: 0,
        maxValue: values.intelligence,
      } as const,
      {
        title: 'Выживание',
        value: 0,
        maxValue: values.intelligence,
      } as const,
      {
        title: 'Медицина',
        value: 0,
        maxValue: values.intelligence,
      } as const,
      {
        title: 'Запугивание',
        value: 0,
        maxValue: values.charisma,
      } as const,
      {
        title: 'Проницательность',
        value: 0,
        maxValue: values.charisma,
      } as const,
      {
        title: 'Внешний вид',
        value: 0,
        maxValue: values.charisma,
      } as const,
      {
        title: 'Манипулирование',
        value: 0,
        maxValue: values.charisma,
      } as const,
    ],
    level: 0,
    damage: 0,
    health: 3 + values.power,
    ...values,
  };
  return character;
}

// export function createCharacter(values: BaseCharacterSettings): Character {
//   const character: Character = {
//     id: v1(),
//     lifeForce: {
//       title: 'Жизненная сила',
//       value: 3 + values.power,
//     } as const,
//     evasion: {
//       title: 'Уклонение',
//       value: 10 + values.dexterity,
//     } as const,
//     energy: {
//       title: 'Энергичность',
//       value: values.dexterity + values.intelligence,
//     } as const,
//     skills: [
//       {
//         attack: {
//           title: 'Атака',
//           value: 0,
//           maxValue: values.power,
//         } as const,
//       },
//       {
//         stealth: {
//           title: 'Стелс',
//           value: 0,
//           maxValue: values.dexterity,
//         } as const,
//       },
//       {
//         archery: {
//           title: 'Стрельба из лука',
//           value: 0,
//           maxValue: values.dexterity,
//         } as const,
//       },
//       {
//         learnability: {
//           title: 'Обучаемость',
//           value: 0,
//           maxValue: values.intelligence,
//         } as const,
//       },
//       {
//         survival: {
//           title: 'Выживание',
//           value: 0,
//           maxValue: values.intelligence,
//         } as const,
//       },
//       {
//         medicine: {
//           title: 'Медицина',
//           value: 0,
//           maxValue: values.intelligence,
//         } as const,
//       },
//       {
//         intimidation: {
//           title: 'Запугивание',
//           value: 0,
//           maxValue: values.charisma,
//         } as const,
//       },
//       {
//         insight: {
//           title: 'Проницательность',
//           value: 0,
//           maxValue: values.charisma,
//         } as const,
//       },
//       {
//         appearance: {
//           title: 'Внешний вид',
//           value: 0,
//           maxValue: values.charisma,
//         } as const,
//       },
//       {
//         manipulation: {
//           title: 'Манипулирование',
//           value: 0,
//           maxValue: values.charisma,
//         } as const,
//       },
//     ],
//     level: 0,
//     ...values,
//   };
//   return character;
// }
