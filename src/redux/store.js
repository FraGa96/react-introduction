import { configureStore } from '@reduxjs/toolkit';
import { accountsReducer } from './accounts';
import { expensesIncomesReducer } from './expensesIncomes';

const store = configureStore({
  reducer: {
    accounts: accountsReducer,
    expensesIncomes: expensesIncomesReducer,
  },
});

export default store;
