import React, { useCallback } from 'react';
import { Navigate } from 'react-router';

import { useAppDispatch, useAppSelector } from '../../hooks';
import Header from '../../components/header';
import { Link } from '../../components/link';
import {
  BattleCharacter,
  BattleHead,
  battleActions,
} from '../../modules/battle';
import { BattleLayout } from '../../modules/battle/components/battle-layout';
import { BattleDisplay } from '../../modules/battle/components/battle-display';

export const Game: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();

  const select = useAppSelector((state) => ({
    character: state.battle.character,
    enemy: state.battle.enemy,
    status: state.battle.status,
  }));
  // console.log('level b:', select.character?.level);

  const callbacks = {
    takeDamageCharacter: useCallback(() => {
      dispatch(battleActions.takeDamageCharacter());
    }, [dispatch]),
    takeDamageEnemy: useCallback(() => {
      dispatch(battleActions.takeDamageEnemy());
    }, [dispatch]),
  };

  // при переходе по прямой ссылке на роут "/game" редирект в меню
  if (!select.character || !select.enemy) return <Navigate to="/" replace />;

  return (
    <>
      <Header>
        <Link to="/">Меню</Link>
      </Header>

      <BattleLayout status={select.status}>
        <BattleHead
          character={select.character.name}
          enemy={select.enemy.name}
          characterHealth={select.character.health}
          enemyHealth={select.enemy.health}
        />

        <BattleDisplay>
          <BattleCharacter
            character={select.character}
            denotation="character"
            takeDamage={callbacks.takeDamageCharacter}
          />
          <BattleCharacter
            character={select.enemy}
            denotation="enemy"
            takeDamage={callbacks.takeDamageEnemy}
          />
        </BattleDisplay>
      </BattleLayout>
    </>
  );
});
