import React, { useMemo, useState } from 'react';

const Test3 = () => {

    const [count ,setCount] = useState(1)

    const fun1 = (cnt) => {
        console.log("test");
        let k = 0
        for(let i = 0 ; i < 1000000000 ; i++){
            k++
        }
        return cnt * 10
    }
    //사용자 정의 함수
    const reCount =useMemo(()=>{
        return fun1(count)
    },[count])

    return (
        <div>
            <h1>카운트 : {count} </h1>
            <input type="text " value={count} onChange={ e => setCount(e.target.value)} />
            <hr />
            <h1>출력 : {reCount} </h1>
        </div>
    );
};

export default Test3;