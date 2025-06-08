import { useContext } from "react"
import { AppContext } from "../context/AppContext"

export const IncomeExpenses = () => {
    const { totalIncomes, totalExpenses} = useContext(AppContext);
    return (
        <div className='inc-exp-container'>
            <div>
                <p>Income</p>
                <p id="money-plus" class="money plus">+${totalIncomes}</p>
            </div>
            <div>
                <p>Expense</p>
                <p id="money-minus" class="money minus">-${totalExpenses}</p>
            </div>
        </div>
    )
}