import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { numberWithCommas } from '../utils/format'

const IncomeExpenses = () => {

    const { transactions } = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount)

    const income = amounts.length > 0 && amounts.filter(item => item > 0).length > 0 ? amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2) : 0;
    const expense =  amounts.length > 0 && amounts.filter(item => item < 0).length > 0 ? amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1 : 0;

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">${numberWithCommas(income)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">${numberWithCommas(expense)}</p>
            </div>
        </div>
    )
}

export default IncomeExpenses