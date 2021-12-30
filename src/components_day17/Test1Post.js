import React from 'react';

const Test1Post = ( {post , loading , currentPost} ) => {

    if(loading){
        return <h2>loading....</h2>
    }

    return (
        <ul>
            {
                currentPost.map( item => <li key = {item.id} 
                                    style ={{marginBottom:5,listStyle:'none'}}
                                >
                    {item.id} / {item.title}
                </li>)
            }
        </ul>
    );
};

export default Test1Post;