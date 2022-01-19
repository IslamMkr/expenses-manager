import Expenses from "../Expenses/Expenses"

import './wallet.css'

const walletIcon = require('../../images/wallet.png')

const Wallet = ({wallet, expenses}) => {
    return (
        <div className="wallet">
            <div className="wallet-header">
                <div className="wallet-header-text">
                    <img src={walletIcon} alt="Wallet" id="wallet-icon" />
                    <h2>{wallet.name}</h2>
                </div>
                <div className="calendar btn"></div>
            </div>
            <Expenses expenses={expenses} />
        </div>
    )
}

export default Wallet
