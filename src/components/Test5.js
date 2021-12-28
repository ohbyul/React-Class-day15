import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Test5 = () => {
    const[data, setData] = useState([])
    const [text, setText] = useState('css')

    useEffect( ()=>{
        const url = `https://hn.algolia.com/api/v1/search?query=${text}`
        //백틱에 달라표시
        axios.get(url)
            .then(res =>setData(res.data.hits))
    },[])

    return (
        <div>
            <input type="text" value={text} onChange = {e => setText( e.target.value)} />
            <hr />
            <ul>
                {
                    data.map ( item => <li key={item.objectID}>
                        {item.title}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test5;


//https://hn.algolia.com/api/v1/search?query=css