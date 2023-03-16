export interface Character extends BaseCharacterSettings {
  id: string;
  lifeForce: { title: 'Жизненная сила'; value: number };
  evasion: { title: 'Уклонение'; value: number };
  energy: { title: 'Энергичность'; value: number };
  skills: Skills;
  level: Level;
  damage: number;
  health: number;
}

export interface BaseCharacterSettings {
  name: string;
  power: number;
  dexterity: number;
  intelligence: number;
  charisma: number;
}

export type Level = 0 | 1 | 2 | 3 | 4 | 5;

export type Skills = Skill[];

export type Skill = { title: SkillTitle; value: number; maxValue: number };
export type SkillTitle = keyof typeof skillsTitle;

export enum skillsTitle {
  'Атака',
  'Стелс',
  'Стрельба из лука',
  'Обучаемость',
  'Выживание',
  'Медицина',
  'Запугивание',
  'Проницательность',
  'Внешний вид',
  'Манипулирование',
}
