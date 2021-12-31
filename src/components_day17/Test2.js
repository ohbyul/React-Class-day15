import React, { useMemo, useState } from 'react';

const Test2 = () => {
    const [cnt1 , setCnt1] = useState(1)
    const [cnt2 , setCnt2] = useState(10)

    //함수를 별도로 맘ㄴ들어서 return을 처리할 경우  (return 값을 기억 -useMemo)
    const isEven = useMemo(() => {
        console.log('test');
        console.log(cnt1);
        return cnt1 % 2 === 0
        
    }, [cnt1] )

    return (
        <div>
            <h2>카운트 : {cnt1 } </h2>
            <button onClick = { () => setCnt1(cnt1 + 1)}>증가</button>

            <h2>카운트 : {cnt2 } </h2>
            <button onClick = { () => setCnt2(cnt2 + 1)}>증가</button>

            <hr />
            <h2>
                {
                    isEven ? '짝수' : '홀수'
                }
            </h2>
        </div>
    );
};

export default Test2;

/*
    성능 최적화를 위해 사용
    useMemo / useCallback : 메모 이퀘이션
    useMemo :  return 값을 기억
    useCallback : 함수 를 기억 (함수 자체를 기억)


    useMemo : 잘쓰기 쉽지 않다 (많이 사용 안한다.)
             + context 사용한다
    
    useMemo( () => {} , deps)
    useMemo(함수, 의존성)
    useMemo(함수, [])
    useMemo(함수, [바뀌는값])


    
    useCallback : 함수 를 기억한다 - 모든 함수에 처리하는 것이 아니다 95% 처리한다.
    useCallback( () => {} , deps)
    useCallback(함수, 의존성)
    useCallback(함수, [])
    useCallback(함수, [바뀌는값])



*/