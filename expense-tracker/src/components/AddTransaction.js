import { AppContext } from "../context/AppContext";
import { useContext } from "react";

export const AddTransaction = () => {
    const {
        transactionName,
        transactionAmount,
        transactionType,
        setTransactionAmount,
        setTransactionName,
        setTransactionType,
        addTransaction } = useContext(AppContext);
    return (
        <div>
            <p>Add new transaction</p>
            <hr></hr>
            <div>
                <form onSubmit={addTransaction}>
                    <label for="transaction-name">Transaction Name:</label>
                    <input value={transactionName} id="transaction-name" type='text' onChange={ (e) => setTransactionName(e.target.value)}/>
                    <label for="transaction-amount">Amount</label>
                    <input value={transactionAmount} id="transaction-amount" type='text' onChange={ (e) => setTransactionAmount(e.target.value)}/>
                    <label for='transaction-type'>Type</label>
                    <select value={transactionType} id="transaction-type" onChange={ (e) => setTransactionType(e.target.value)}>
                        <option value='income'>Income</option>
                        <option value='expense'>Expense</option>
                    </select>
                    <button id='btn-add-transaction'>Add Transaction</button>
                </form>
            </div>
        </div>
    )
}