import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { Transaction } from "./Transaction";

export const TransactionList = (props) => {

    const { transactions} = useContext(AppContext);

    return (
        <div>
            <h3>History</h3>
            <ul id='list' className="list">
                { 
                    transactions.map((transaction,index) => (
                        <Transaction transaction={transaction}/>
                    ))
                }
            </ul>
        </div>
    )
}