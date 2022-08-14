import React, {useContext} from 'react';
import { Context } from "./data/Context";

const Header = () => {
    const { dispatch } = useContext(Context);
console.log('header');
    const changeDay = (e, day) => {
        dispatch({type : 'Change', day : day});
    }
    return (
        <div className='container'>
            <div className='container1'>
                <span>Price</span>
                <span>Market Cap</span>
                <span>Candle Chart</span>
            </div>
            <div className='container2'>
                <span onClick={ e => changeDay(e, 1)}>1D</span>
                <span onClick={ e => changeDay(e, 7)}>7D</span>
                <span onClick={ e => changeDay(e, 30)}>1M</span>
                <span onClick={ e => changeDay(e, 90)}>3M</span>
                <span onClick={ e => changeDay(e, 365)}>1Y</span>
                <span onClick={ e => changeDay(e, 180)}>YTD</span>
                <span onClick={ e => changeDay(e, 'max')}>ALL</span>
                <span><img className='img_icons' src='calendar.png' alt='img' /></span>
                <span>LOG</span>
            </div>
        </div>
    )

}


export default Header;