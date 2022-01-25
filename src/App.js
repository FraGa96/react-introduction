import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import * as routes from './utils/routes.contants';
import { Header } from './components/common';
import ExpensesScreen from './components/expenses/ExpensesScreen';
import AccountsScreen from './components/accounts/AccountsScreen';
import Accounts from './components/accounts/Accounts';
import AccountsMovements from './components/accounts/AccountsMovements';
import './App.css';

function App() {
  return (
    <Router>
      <Header />

      <main>
        <Routes>
          <Route index element={<ExpensesScreen />} />

          <Route path={routes.ACCOUNT_ROUTE} element={<AccountsScreen />}>
            <Route index element={<Accounts />} />

            <Route path={':id'} element={<AccountsMovements />} />
          </Route>
        </Routes>
      </main>
    </Router>
  );
}

export default App;
