import React from 'react'

function PlayerRack({ player, shooterProfit, currentBet, rackAmount, bankroll, totalNet }) {
    return (
        <div className='player-rack'>
            <span className='player-name'>{player}</span>
            <span className='player-shooter'>Shooter: {shooterProfit}</span>
            <span className='player-bets'>Bets: {currentBet}</span>
            <span className='player-bank'>Rack: {rackAmount}</span>
            <span className='player-bank'>Bankroll: {bankroll}</span>
            <span className='player-net'>NET: {totalNet}</span>
        </div>
    )
}

export default PlayerRack