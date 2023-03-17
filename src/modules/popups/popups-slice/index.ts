import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { CommonPopupType } from '../types';

type PopupsState = {
  mountedPopups: CommonPopupType[];
};

const initialState: PopupsState = {
  mountedPopups: [],
};

const popupsSlice = createSlice({
  name: 'popups',
  initialState,
  reducers: {
    open(state, action: PayloadAction<CommonPopupType>) {
      state.mountedPopups.push(action.payload);
    },
    close(state, action: PayloadAction<CommonPopupType>) {
      state.mountedPopups = state.mountedPopups.filter(
        (popup) => popup === action.payload
      );
    },
    closeAll(state) {
      state.mountedPopups = [];
    },
  },
});

export const popupsActions = popupsSlice.actions;
export const popupsReducer = popupsSlice.reducer;
