export const Transaction = ({transaction}) => {
    return (
        <li className={transaction.type === 'expense'? 'minus': 'plus'}>
            {transaction.name} <span>{transaction.type === 'expense'? '-': '+'}${transaction.amount}<button className="delete-btn">x</button></span>
        </li>
    )
}