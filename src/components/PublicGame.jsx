import React from 'react';
import GameBoard from './table/GameBoard';

function PublicGame() {
    return (
        <div>
            <GameBoard isPublic={true} />
        </div>
    )
}

export default PublicGame