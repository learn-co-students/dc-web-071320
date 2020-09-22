import React from 'react'

const SushiWallet = ( props ) => {

    return (
        <div>
            <label>Withdraw: </label>
            <input 
                type='number'
                name='withdrawal'
                placeholder='Add money...'
                // value = { props.withdrawal }  use to make a controlled form
                onChange={ props.changeWithdrawalAmount }
            />
            <button onClick={ props.addMoney } >Gimme my money!</button>
        </div>
    )
}

export default SushiWallet