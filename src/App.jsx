import Wallet from './components/Wallet/Wallet'

const App = () => {
    const expenses = [
        {
            "id": 1,
            "name": "Restaurants & Cafe",
            "date": "12 January 2022",
            "ammount": 45.85
        },
        {
            "id": 2,
            "name": "Clothing",
            "date": "25 January 2022",
            "ammount": 124.25
        },
        {
            "id": 3,
            "name": "Health Care",
            "date": "25 December 2021",
            "ammount": 10.00
        }
    ]

    const wallet = {
        "name": "Home Wallet"
    }

    return (
        <div className='container'>
            <h1>Let's get started!</h1>
            <Wallet wallet={wallet} expenses={expenses} />
        </div>
    )
}

export default App
