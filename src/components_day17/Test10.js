import React, { useCallback, useState } from 'react';
import Test10Count from './Test10Count';
import Test10Title from './Test10Title';

const Test10 = () => {
    const [age, setAge] = useState(30)
    const [money , setMoney] = useState(100000000)

    const onAge =useCallback( () => {
        setAge(age + 1)
    },[age])

    const onMoney =  useCallback( () => {
        setMoney(money + 50000000)
    },[money])
    return (
        <div>
            <Test10Title /> 
            <Test10Count count={age} text="나이" /> 
            <button onClick={onAge} >나이증가</button>
            <hr /> 
            <Test10Count count={money} text="급여"/> 
            <button onClick={onMoney} >급여증가</button>
        </div>
    );
};

export default Test10;