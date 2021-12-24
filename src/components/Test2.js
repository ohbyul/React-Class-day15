import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Test2 = () => {
    const [ post , setPost ] = useState({})
    const [ id , setId ] = useState( 3 )
    const [ num , setNum ] = useState( 3 )

    useEffect( () => {
        const url = `https://jsonplaceholder.typicode.com/posts/${num}`
        axios.get(url)
        .then( res => setPost( res.data ))
    },[num])

    const onShow = ()  => {
        setNum( id )
    }

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)}/>
            <button onClick={ onShow }>검색</button>
            <h2>{post.id} /{ post.title} </h2>
        </div>
    );
};

export default Test2;