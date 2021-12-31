import React, { useState } from 'react';
import Test6Sub from './Test6Sub';

const Test6 = () => {

    const [ color, setColor ] =useState('')
    const [ food , setFood ] = useState('')

    const onColor = (e) => {
        const {value} = e.target
        setColor(value)
    }
    const onFood = (e) => {
        const {value} = e.target
        setFood(value)
    }

    return (
        <div>
            <h2>당신이 좋아하는 색은 ? </h2>
            <div>
                <input type = "text" value={color} onChange={onColor}/>
                <p>pink, green, blue</p>
            </div>

            <h2>당신이 좋아하는 음식은 ? </h2>
            <div>
                <input type="radio" value="만두" name = "food" onChange={onFood}/>
                <label>만두</label>
                <input type="radio" value="갈비" name = "food" onChange={onFood}/>
                <label>갈비</label>
                <input type="radio" value="불고기" name = "food" onChange={onFood}/>
                <label>불고기</label>
                <input type="radio" value="과자" name = "food" onChange={onFood}/>
                <label>과자</label>
            </div>
            <hr /> 
            <Test6Sub color={color} food={food}/>
        </div>
    );
};

export default Test6;