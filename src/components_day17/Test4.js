import React, { useMemo, useState } from 'react';
import Test4Sub from './Test4Sub';

const Test4 = () => {
    const [count ,setCount] = useState(1)

    const increment = () => {
        setCount(count +1)
    }

    //사용자 정의 함수
    const testSub = useMemo ( () => {
        return <Test4Sub />
    }, [count] )

    return (
        <div>
            <h1>출력 : {count} </h1>
            <button onClick={increment}>증가</button>
            <hr />
            { testSub }
        </div>
    );
};

export default Test4;