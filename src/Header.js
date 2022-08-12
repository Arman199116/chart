import React from 'react';


const Header = () => {


    return (
        <div className='container'>
            <div className='container1'>
                <span>Price</span>
                <span>Market Cap</span>
                <span>Candle Chart</span>
            </div>
            <div className='container2'>
                <span>1D</span>
                <span>7D</span>
                <span>1M</span>
                <span>3M</span>
                <span>1Y</span>
                <span>YTD</span>
                <span>ALL</span>
                <span><img className='img_icons' src='calendar.jpg' alt='img' /></span>
                <span>LOG</span>
            </div>
        </div>
        
    )

}


export default Header;