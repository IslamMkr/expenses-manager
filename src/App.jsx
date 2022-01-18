import React from 'react'
import ExpenseItem from './components/ExpenseItem/ExpenseItem'

const App = () => {
    const randomData = [
        {
            "name": "Restaurants & Cafe",
            "date": "12 January 2022",
            "ammount": 45.85
        },
        {
            "name": "Clothing",
            "date": "25 January 2022",
            "ammount": 124.25
        },
        {
            "name": "Health Care",
            "date": "25 December 2021",
            "ammount": 10.00
        }
    ]

    return (
        <div>
            <h2>Let's get started!</h2>
            {
                randomData.map ( data =>
                    <ExpenseItem expense={data} />
                )
            }
        </div>
    )
}

export default App
