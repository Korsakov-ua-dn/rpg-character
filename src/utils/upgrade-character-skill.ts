import { Character, Level } from '../modules/character/character-slice';

export function upgradeCharacterSkill(
  character: Character,
  damage: number
): Character {
  character.damage += damage;
  character.level = Math.floor(Math.min(character.damage / 10, 5)) as Level;
  character.skills.forEach((skill) =>
    character.level <= skill.maxValue
      ? (skill.value = character.level)
      : (skill.value = skill.maxValue)
  );
  return character;
}
