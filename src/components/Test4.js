import axios from 'axios';
import React, { useEffect, useState } from 'react';

//일반적으로 사용하는 방법
const Test4 = () => {
    const [data, setData] = useState([]);
    const [loading , setLoading] = useState(false); //펄스 기준으로 변경
    const [error, setError] = useState(null);   //null로 변경 

    useEffect( () => {
        //함수 만들어서 사용
        const getData = async() => {
            try{
                const re = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setData(re.data);
                setError(null);
                setLoading(true);
            }catch (e){
                setError(e);
            }
            setLoading(true);
        }
        getData();
    } , [])

    if(!loading) return <div>로딩중..</div>
    if(error) return <div>에러가 발생했습니다.</div>
    if(!data) return null

    return (
        <div>
            {
                data.map( item => <p key={item.id}>
                    {item.id} / {item.title}
                </p>)
            }
        </div>
    );
};

export default Test4;