import { useReducer } from 'react'

const reducer = (state, action) => {
    switch(action.type) {
        case "DEPOSIT":
            return state + action.payload
        case "WITHDRAW":
            return state - action.payload
        default:
            return state        
    }

 }

function UseReducerComp() {
    const deposit = (amount) => {
        return dispatch({
            type: "DEPOSIT",
            payload: amount
        })

   
    }
    const withdraw = (amount) => {
        return dispatch({
            type: "WITHDRAW",
            payload: amount
        })}


    const [amount, dispatch] = useReducer(reducer, 500)
    return (
        <div>
            <h1>UseReducer</h1>
            <h2>{amount}</h2>
            <button onClick={() => deposit(500)}>Deposit</button> 
            <br />
            <button onClick={() => withdraw(500)}>Withdraw</button>
        </div>
    )
}

export default UseReducerComp