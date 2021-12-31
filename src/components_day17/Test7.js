import React, { useCallback, useState } from 'react';

const Test7 = () => {
    const [count , setCount] = useState(1)
    
    const ran = Math.random()

    //함수 자체를 기억하는것.
    const increament= useCallback( () => {
        console.log(ran);
        setCount(count + 1)
    },[count])
    //[] 의존성 비우면 ran 함수가 한번만 호출 된다.

    const decreament= useCallback( () => {
        console.log(ran);
        setCount(count - 1)
    },[count])

    return (
        <div>
            <h2>카운트 : {count}</h2>
            <p>
                <button onClick={increament} >증가</button>
                <button onClick={decreament} >감소</button>
            </p>
        </div>
    );
};

export default Test7;