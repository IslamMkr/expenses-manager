import ExpenseItem from "../ExpenseItem/ExpenseItem"

import './expenses.css'

const addIcon = require('../../images/plus.png')

const Expenses = ({ expenses }) => {
    const addExpenseClickHandler = () => {
        // TODO: handle add expense
        console.log('clicked!!!')
    }

    return (
        <div className="expenses">
            <div className="expenses-header">
                <h4>January 19 2022</h4>
                <img src={addIcon} 
                    alt="Add Expense Button" 
                    className="btn" 
                    id="btn-add-expense"
                    onClick={addExpenseClickHandler} />
            </div>

            {
                expenses.map (
                    expense => <ExpenseItem key={expense.id} expense={expense} />
                )
            }
        </div>
    )
}

export default Expenses
