import React, { useCallback } from 'react';
import { Navigate, useNavigate } from 'react-router';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { Header } from '../../components/header';
import { Button } from '../../components/button';
import {
  BattleCharacter,
  BattleDisplay,
  BattleHead,
  BattleLayout,
  battleActions,
} from '../../modules/battle';

export const Game: React.FC = React.memo(() => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const select = useAppSelector((state) => ({
    character: state.battle.character,
    enemy: state.battle.enemy,
    status: state.battle.status,
  }));

  const callbacks = {
    takeDamageCharacter: useCallback(() => {
      dispatch(battleActions.takeDamageCharacter());
    }, [dispatch]),

    takeDamageEnemy: useCallback(() => {
      dispatch(battleActions.takeDamageEnemy());
    }, [dispatch]),

    onQuit: useCallback(() => navigate(-1), [navigate]),
  };

  // при переходе по прямой ссылке на роут "/game" редирект в меню
  if (!select.character || !select.enemy) return <Navigate to="/" replace />;

  return (
    <>
      <Header>
        <Button onClick={callbacks.onQuit}>Выйти</Button>
      </Header>

      <BattleLayout status={select.status}>
        <BattleHead
          characterName={select.character.name}
          enemyName={select.enemy.name}
          characterHealth={select.character.health}
          enemyHealth={select.enemy.health}
        />

        <BattleDisplay>
          <BattleCharacter
            skills={select.character.skills}
            denotation="character"
            takeDamage={callbacks.takeDamageCharacter}
          />
          <BattleCharacter
            skills={select.enemy.skills}
            denotation="enemy"
            takeDamage={callbacks.takeDamageEnemy}
          />
        </BattleDisplay>
      </BattleLayout>
    </>
  );
});
