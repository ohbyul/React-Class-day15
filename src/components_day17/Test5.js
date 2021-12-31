import React, { useEffect, useMemo, useState } from 'react';

const user = [
    {id:1 , name : '강호동'},
    {id:2 , name : '유재석'},
    {id:3 , name : '강동동'},
    {id:4 , name : 'Cat'},
    {id:5 , name : '김민정'},
    {id:6 , name : 'DOG'},
    {id:7 , name : 'cat'},
    {id:8 , name : '강산에'},
    {id:9 , name : '미미미'},
    {id:10 , name : '유이'}
]


const Test5 = () => {
    const [text ,setText] = useState('')
    const [search , setSearch] = useState('')

    const onSearch = () => {
        setSearch(text)
    }

    const data = useMemo( () => {
        return user.filter( item => item.name.toLowerCase().includes(text.toLowerCase() ) )
    },[search])


    return (
        <div>
            <input type="text" value = {text} onChange={e => setText(e.target.value)}/>
            <button onClick={onSearch}>검색</button>

            {
                data.map( item => <li key ={item.id}>
                    {item.id} / {item.name}
                </li>)
            }
        </div>
    );
};

export default Test5;