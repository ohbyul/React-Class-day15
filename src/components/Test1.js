import React, { useEffect, useState } from 'react';
import axios  from 'axios'

const Test1 = () => {
    const [ data , setData ] = useState([])

    /*
    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then( res => res.json() )
        .then( res => setData( res ))
    },[])
    */
   /*
    useEffect( () => {
       const getData = async()  => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json()
                setData( data )        
            }
        getData() 
    },[])
    */
    /*
    useEffect( () => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then ( res => setData( res.data ))
    },[])
    */

    useEffect( () => {
        const getData = async()  => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
            setData( res.data )            
        }
        getData()
    },[])

    return (
        <div>
            {
                data.map( item => <p key={item.id}>
                    {item.id} / { item.title }
                </p>)
            }        
        </div>
    );
};

export default Test1;

/*
    Ajax : 서버로부터 새로고침 없이 요청할수 있게 도와줌
           서버로 네트워크 요청을 보내고 응답을 받을수 있도록 해줌 

    1. jQuery  $.ajax()
    2. js - fetch() 
    3. axios 설치 - axios.get()

    형식) fetch()  : json가져오면 json 그대로 가져옴 
    fetch('주소',옵션)
    .then( 콜백 ) 응답완료
    .catch( 콜백 ) 응답실패
    
    형식) axios.get() -> json 가져오면 객체로 변환해서 가져옴 
    axios.get('주소', 옵션) 
    .then( 콜백 ) 응답완료
    .catch( 콜백 ) 응답실패

    useEffect( () => {
        외부파일 가져오기 
    },[])
*/