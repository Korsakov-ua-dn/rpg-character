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
    // количество жизни которое осталось в %
    const percentOfCharacterHealth = Math.ceil(
      (characterHealth / fullCharacterHealth.current) * 100
    );
    const styleCharacter = {
      background: `linear-gradient(
        to right,
        blue 0 ${percentOfCharacterHealth}%,
        red ${percentOfCharacterHealth}% 100%
        )`,
    };

    const fullEnemyHealth = useRef(enemyHealth);
    const percentOfEnemyHealth = Math.ceil(
      (enemyHealth / fullEnemyHealth.current) * 100
    );
    const styleEnemy = {
      background: `linear-gradient(
          to right,
          blue 0 ${percentOfEnemyHealth}%,
          red ${percentOfEnemyHealth}% 100%
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
