import React, { useState } from 'react';
import Test9Sub from './Test9Sub';

const Test9 = () => {
    const [ cnt1 , setCnt1] = useState(1)
    const [ cnt2 , setCnt2] = useState(10)

    const increament = () => {
        setCnt1(cnt1 + 1)
    }
    
    const decreament = () => {
        setCnt2(cnt2 - 1)
    }

    return (
        <div>
            <h2>숫자 : {cnt1} </h2>
            <Test9Sub title ="카운트1" cnt={cnt1} /> 
            <button onClick= {increament}>증가</button>
            <hr /> 
            <h2>숫자 : {cnt2} </h2>
            <Test9Sub title ="카운트2" cnt={cnt2} /> 
            <button onClick={decreament}>감소</button>
        </div>
    );
};

export default Test9;