import React, { useEffect, useState } from 'react';
import axios from 'axios';

//선생님이 자주 사용하는 방법
const Test3 = () => {
    const [data, setData] = useState([]);
    const [loading , setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => {  //성공
            setData(res.data)
            setLoading(false)
            setError('')
        })
        .catch( error =>{   //실패
            setData([])
            setLoading(true)
            setError('데이터를 찾을수 없습니다.')
        })
    },[])

    return (
        <div>
            {
                data && loading ?   //data가 존재하고, loading이 트루면,
                <h2>로딩 중...</h2> 
                : data.map(item => <p key={item.id}>{item.id} / {item.title}</p>)
            }
            <p>
                {
                    error ? error : null
                    //에러 처리 방법
                }
            </p>
        </div>
    );
};

export default Test3;