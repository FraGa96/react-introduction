import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import * as routes from './utils/routes.contants';
import { Header } from './components/common';
import ExpensesScreen from './components/expenses/ExpensesScreen';
import AccountsScreen from './components/accounts/AccountsScreen';
import './App.css';

function App() {
  return (
    <Router>
      <Header />

      <main>
        <Routes>
          <Route path='/' element={<ExpensesScreen />} />

          <Route path={routes.ACCOUNT_ROUTE} element={<AccountsScreen />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
