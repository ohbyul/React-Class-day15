import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Test1Post from './Test1Post';
import Test1paging from './Test1paging';

const Test1 = () => {
    const [post,setPost] = useState([])
    const [loading,setLoading] = useState(true)
    const [currentPage, setCurrentPage] =useState(1)
    //const [postsPerPage , setPostsPerPage] = useState(10)
    const [postsPerPage ] = useState(10)

    useEffect( ()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then( res => {
                setPost(res.data)
                setLoading(false)
            })
    },[])

    const lastPost = currentPage * postsPerPage //10
    const firstPost = lastPost - postsPerPage //0
    const currentPost = post.slice(firstPost , lastPost)

    const onShow = (id) => {
        setCurrentPage(id)
    }

    return (
        <div>
           <Test1Post post={post} loading={loading} currentPost={currentPost} />
           <Test1paging postsPerPage={postsPerPage} post={post} onShow={onShow}/> 
        </div>
    );
};

export default Test1;