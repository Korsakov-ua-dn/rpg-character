import React from 'react';

import type { Skills } from '../../../character/types';

import './style.scss';

interface IProps {
  skills: Skills; // изменяется только при старте новоого боя, не тригерит перерендер
  denotation: 'character' | 'enemy';
  takeDamage: () => void;
}

export const BattleCharacter: React.FC<IProps> = React.memo(
  ({ skills, denotation, takeDamage }) => {
    const imagePath = require(`../../../../assets/images/${denotation}.png`);
    const classN = `Battle-character ${denotation === 'enemy' ? 'enemy' : ''}`;
    return (
      <div className={classN}>
        <ul className="Battle-character__skils">
          {skills.map((skill) => {
            return (
              <li key={skill.title}>
                {denotation === 'enemy'
                  ? `${skill.title} : ${skill.value}`
                  : `${skill.value} : ${skill.title}`}
              </li>
            );
          })}
        </ul>

        <div className="Battle-character__image">
          <img
            draggable="false"
            src={imagePath}
            alt={denotation}
            width={475}
            height={490}
            onClick={takeDamage}
          />
        </div>
      </div>
    );
  }
);
