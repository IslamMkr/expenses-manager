import './expense-item.css'
import '../../main.css'

const expensesIcon = require('../../images/expenses.png')
const xIcon = require('../../images/x.png')

const ExpenseItem = ({expense}) => {
    const deleteExpenseClickHandler = () => {
        // TODO: handle delete expense
    }

    return (
        <div className="expense-item">
            <div className="expense-body">
                <div className="expense-header">
                    <img src={expensesIcon} alt="Expense Icon" />
                    <div className='header-text'>
                        <h4>{expense.name}</h4>
                        <p>{expense.date}</p>
                    </div>
                </div>
                <h4>-${expense.ammount}</h4>
            </div>
            <img src={xIcon} 
                alt="Delete Expense" 
                id="btn-delete" 
                className='btn'
                onClick={deleteExpenseClickHandler} />
        </div>
    )
}

export default ExpenseItem