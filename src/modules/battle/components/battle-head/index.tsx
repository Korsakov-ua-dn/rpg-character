import React, { useRef } from 'react';

import './style.scss';

interface IProps {
  character: string;
  enemy: string;
  characterHealth: number;
  enemyHealth: number;
}

export const BattleHead: React.FC<IProps> = React.memo(
  ({ character, enemy, characterHealth, enemyHealth }) => {
    // запоминаем значение при полной жизни
    const fullCharacterHealth = useRef(characterHealth);
    const percentOfCharacterHealth = Math.ceil(
      (characterHealth / fullCharacterHealth.current) * 100
    );
    const lostCharacterHealth = 100 - percentOfCharacterHealth;
    const styleCharacter = {
      background: `linear-gradient(
        to right,
        blue 0 ${percentOfCharacterHealth}%,
        red 0 ${lostCharacterHealth}%
        )`,
    };

    const fullEnemyHealth = useRef(enemyHealth);
    const percentOfEnemyHealth = Math.ceil(
      (enemyHealth / fullEnemyHealth.current) * 100
    );
    const lostEnemyHealth = 100 - percentOfEnemyHealth;
    const styleEnemy = {
      background: `linear-gradient(
          to right,
          blue 0 ${percentOfEnemyHealth}%,
          red 0 ${lostEnemyHealth}%
        )`,
    };

    return (
      <div className="Battle-head">
        <div className="Battle-head__health" style={styleCharacter} />
        <div className="Battle-head__names">
          <span className="Battle-head__name">{character}</span>
          <b>VS</b>
          <span className="Battle-head__name">{enemy}</span>
        </div>
        <div className="Battle-head__health" style={styleEnemy} />
      </div>
    );
  }
);
