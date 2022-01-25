import { createSlice, nanoid } from "@reduxjs/toolkit";

export const expensesIncomesSlice = createSlice({
  name: 'expensesIncomes',
  initialState: [],
  reducers: {
    addExpenseOrIncome: (state, { payload }) => (
      [
        ...state,
        {
          id: nanoid(),
          ...payload
        },
      ]
    )
  },
});

export const {addExpenseOrIncome} = expensesIncomesSlice.actions;

export const expensesIncomesReducer = expensesIncomesSlice.reducer;
