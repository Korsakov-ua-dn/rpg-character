import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../../hooks';

import { popupsActions } from '../../popups-slice';
import { CommonPopupType, popups } from '../../types';

export const PopupsManager = React.memo(() => {
  const dispatch = useAppDispatch();
  const pathname = useLocation().pathname;

  const select = useAppSelector((state) => ({
    mountedPopups: state.popups.mountedPopups,
  }));

  useEffect(() => {
    dispatch(popupsActions.closeAll());
  }, [pathname, dispatch]);

  return (
    <>
      {select.mountedPopups.map((mountedPopup: CommonPopupType) => {
        const Component = popups[mountedPopup.name];
        return <Component key={mountedPopup.name} {...mountedPopup} />;
      })}
    </>
  );
});
