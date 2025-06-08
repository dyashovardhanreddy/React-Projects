import './App.css';
import { Balance, Header, IncomeExpenses, TransactionList } from './components';
import { AppContext, AppContextProvider } from './context/AppContext';
import { AddTransaction } from './components/AddTransaction';
import { useContext, useEffect } from 'react';

function App() {
  return (
    <AppContextProvider>
      <Header/>
      <Balance />
      <IncomeExpenses/>
      <TransactionList/>
      <AddTransaction/>
    </AppContextProvider>
  );
}

export default App;
