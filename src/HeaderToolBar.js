import React, {useContext, useRef} from 'react';
import { Context } from "./data/Context";
import Span from './graph/CreateSpan';

const Header = () => {
    const { dispatch } = useContext(Context);
    const containerRef = useRef();

    const changeDay = (e, day) => {
        const span = containerRef.current.children;
        for (let i = 0; i < span.length; i++) {
            span[i].className = "" ;
        }
        e.currentTarget.className = "active";
        dispatch({type : 'Change', day : day});
    }
    let dayContainer = [
        ['1D', 1, 'active'],
        ['7D', 7, ''],
        ['1M', 30, ''],
        ['3M', 90, ''],
        ['1Y', 365, ''],
        ['YTD', 185, ''],
        ['All', 'max', ''],
    ];
    return (
        <div className='container'>
            <div ref={containerRef} className='container2'>
                {
                    dayContainer.map((item, index) => {
                        return (
                            <Span key={index} changeDay={changeDay} dayName={item[0]} day={item[1]} activ={item[2]} />
                        )
                    })
                }
            </div>
        </div>
    )

}


export default Header;