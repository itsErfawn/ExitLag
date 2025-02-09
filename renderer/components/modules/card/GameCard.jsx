import React from 'react'

function GameCard() {
    return (

        <div className="gaming-card">
            <a href="#">
                <img className="gaming-card-image" src="/images/slider-2.png" alt="" />
            </a>
            <div className="gaming-card-content">
                <a href="#">
                    <h5 className="gaming-card-title">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="gaming-card-text">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
                <a href="#" className="gaming-card-button">
                    Read more
                    <svg className="gaming-card-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    );
}

export default GameCard