export interface Character extends BaseCharacterSettings {
  id: string;
  lifeForce: { title: 'Жизненная сила'; value: number };
  evasion: { title: 'Уклонение'; value: number };
  energy: { title: 'Энергичность'; value: number };
  skills: [
    { title: 'Атака'; value: number; maxValue: number },
    { title: 'Стелс'; value: number; maxValue: number },
    { title: 'Стрельба из лука'; value: number; maxValue: number },
    { title: 'Обучаемость'; value: number; maxValue: number },
    { title: 'Выживание'; value: number; maxValue: number },
    { title: 'Медицина'; value: number; maxValue: number },
    { title: 'Запугивание'; value: number; maxValue: number },
    { title: 'Проницательность'; value: number; maxValue: number },
    { title: 'Внешний вид'; value: number; maxValue: number },
    {
      title: 'Манипулирование';
      value: number;
      maxValue: number;
    }
  ];
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
