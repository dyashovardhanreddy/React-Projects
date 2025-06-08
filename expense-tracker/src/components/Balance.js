import { useContext, useEffect } from "react"
import { AppContext } from "../context/AppContext";

export const Balance = () => {
    const { balance } = useContext(AppContext);
    return (
        <div className='container'>
            <h4>Your Balance</h4>
            <h1 id="balance">${balance}</h1>
        </div>
    )
}