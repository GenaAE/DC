import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import State from './types/State';

const initialState: State = {
  investors: [],
  savedInvestors: [],
  error: undefined,
};

export const getInvestors = createAsyncThunk(
  'investors/getInvestors',
  async () => {
    const res = await fetch(
      'https://64f5d7f12b07270f705dc85b.mockapi.io/api/dc1/investors',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await res.json();
    console.log(data);
    return data;
  }
);

const investorSlice = createSlice({
  name: 'investors',
  initialState,
  reducers: {
    //ДОБИТЬ создать редюсер для заполнения выбранных инвесторов
    /**
     * добавление инвестора в СРМ юзера
     */
    addInvestorToTable: (state, action) => {
      state.savedInvestors = [...state.savedInvestors, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getInvestors.fulfilled, (state, action) => {
        state.investors = action.payload;
      })
      .addCase(getInvestors.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const { addInvestorToTable } = investorSlice.actions;

export default investorSlice.reducer;
