import {
  Character,
  Skill,
  SkillTitle,
  skillsTitle,
} from '../modules/character/types';

export function isCharacter(value: unknown): value is Character {
  if (!isObject(value)) return false;

  if (
    'id' in value &&
    typeof value.id === 'string' &&
    'lifeForce' in value &&
    isParameter(value.lifeForce, 'Жизненная сила') &&
    'evasion' in value &&
    isParameter(value.evasion, 'Уклонение') &&
    'energy' in value &&
    isParameter(value.energy, 'Энергичность') &&
    'skills' in value &&
    isSkills(value.skills) &&
    'level' in value &&
    typeof value.level === 'number' &&
    Number.isInteger(value.level) &&
    value.level >= 0 &&
    value.level <= 5 &&
    'damage' in value &&
    typeof value.damage === 'number' &&
    Number.isInteger(value.damage) &&
    'health' in value &&
    typeof value.health === 'number' &&
    Number.isInteger(value.health) &&
    'name' in value &&
    typeof value.name === 'string' &&
    'power' in value &&
    typeof value.power === 'number' &&
    Number.isInteger(value.power) &&
    'dexterity' in value &&
    typeof value.dexterity === 'number' &&
    Number.isInteger(value.dexterity) &&
    'intelligence' in value &&
    typeof value.intelligence === 'number' &&
    Number.isInteger(value.intelligence) &&
    'charisma' in value &&
    typeof value.charisma === 'number' &&
    Number.isInteger(value.charisma)
  ) {
    return true;
  }

  return false;
}

function isParameter(value: unknown, title: string) {
  if (!isObject(value)) return false;

  if (
    'title' in value &&
    value.title === title &&
    'value' in value &&
    typeof value.value === 'number' &&
    Number.isInteger(value.value)
  ) {
    return true;
  }

  return false;
}

function isSkills(value: unknown): value is Skill[] {
  if (!Array.isArray(value)) return false;

  for (let i = 0; i < value.length; i++) {
    if (!isSkill(value[i])) return false;
  }

  return true;
}

function isSkill(value: unknown): value is Skill {
  if (!isObject(value)) return false;

  if (
    'title' in value &&
    typeof value.title === 'string' &&
    isTitle(value.title) &&
    'value' in value &&
    typeof value.value === 'number' &&
    'maxValue' in value &&
    typeof value.maxValue === 'number'
  ) {
    return true;
  }

  return false;
}

function isObject(value: unknown): value is object {
  return typeof value === 'object' && value !== null;
}

function isTitle(value: string): value is SkillTitle {
  const values = Object.values(skillsTitle);
  return values.includes(value);
}
