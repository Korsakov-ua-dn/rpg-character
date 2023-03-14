import React from 'react';

import { Character } from '../../../character/character-slice';

import './style.scss';

interface IProps {
  character: Character;
  denotation: string;
  takeDamage: () => void;
}

export const BattleCharacter: React.FC<IProps> = React.memo(
  ({ character, denotation, takeDamage }) => {
    const imagePath = require(`../../../../assets/images/${denotation}.png`);
    const classN = `Battle-character ${denotation === 'enemy' ? 'enemy' : ''}`;
    return (
      <div className={classN}>
        <ul className="Battle-character__skils">
          {character.skills.map((skill) => {
            return (
              <li key={skill.title}>
                {denotation === 'enemy'
                  ? `${skill.title} : ${skill.value}`
                  : `${skill.value} : ${skill.title}`}
              </li>
            );
          })}
        </ul>
        <div>
          <img
            draggable="false"
            src={imagePath}
            alt=""
            // width={300}
            // height={300}
            onClick={takeDamage}
          />
        </div>
      </div>
    );
  }
);
