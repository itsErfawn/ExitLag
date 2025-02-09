import React from 'react'

function GameCard() {
    return (

        <div className="gaming-card">
            <a href="/games/minecraft">
            <img className="gaming-card-image" src={`/images/slider-${Math.floor(Math.random() * 4) + 1}.png`} alt="" />
            </a>
            <div className="gaming-card-content">
                <a href="#">
                    <h5 className="gaming-card-title">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="gaming-card-text">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
            </div>
        </div>
    );
}

export default GameCard