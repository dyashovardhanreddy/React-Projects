import { createContext, useEffect, useState } from "react";

export const AppContext = createContext(null);

export const AppContextProvider = ( { children }) => {
    const [balance, setBalance] = useState(0);
    const [totalIncomes, setTotalIncome] = useState(0);
    const [totalExpenses, setTotalExpenses] = useState(0);
    const [transactions, setTransactions ] = useState([]);

    const [ transactionName, setTransactionName ] = useState();
    const [ transactionType, setTransactionType ] = useState()
    const [ transactionAmount, setTransactionAmount ] = useState();

    const addTransaction = (event) => {
        event.preventDefault();
        setTransactions(prev => [
            ...prev,
            {
                name: transactionName,
                amount: transactionAmount,
                type: transactionType,
            },
        ]);

        if(transactionType === 'expense'){
            setTotalExpenses(prevTotalExpenses => prevTotalExpenses + parseInt(transactionAmount));
        } else{
            setTotalIncome(prevTotalIncome => prevTotalIncome + parseInt(transactionAmount));
        }
        setBalance(totalIncomes - totalExpenses);
    };

    const value = {
        balance: balance,
        setBalance: setBalance,
        totalIncomes: totalIncomes,
        totalExpenses: totalExpenses,
        transactions: transactions,
        setTransactions: setTransactions,
        transactionName: transactionName,
        setTransactionName: setTransactionName,
        transactionAmount: transactionAmount,
        setTransactionAmount: setTransactionAmount,
        setTransactionType: setTransactionType,
        transactionType: transactionType,
        addTransaction: addTransaction
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}