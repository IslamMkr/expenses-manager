import React from 'react'

import './expense-item.css'

const ExpenseItem = ({name, date, ammount}) => {
    return (
        <div className="expense-item">
            <div className="expense-body">
                <div className="expense-header">
                    <img src="#" alt="Expense Icon" />
                    <div className='header-text'>
                        <h4>{name}</h4>
                        <p>{date}</p>
                    </div>
                </div>
                <h4>-${ammount}</h4>
            </div>
            <img src="#" alt="Delete Expense" />
        </div>
    )
}

export default ExpenseItem