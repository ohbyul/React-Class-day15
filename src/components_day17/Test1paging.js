import React from 'react';

const Test1paging = ({postsPerPage , post, onShow}) => {
    const pageNum = []
    for(let i = 1 ; i < Math.ceil(post.length / postsPerPage) ; i++){
        pageNum.push(i)
    }
    
    return (
        <ul style={{listStyle:'none' , display:'flex'}}>
            {
                pageNum.map( item=> <li key={item} 
                                        style={{width : 30 , height : 30 , 
                                                border : '1px solid black' ,
                                                textAlign : 'center' , margin:5 , 
                                                lineHeight:'30px' , cursor : 'pointer'}}
                                        onClick ={()=>onShow(item)}    //페이지 번호 props로 거꾸러 담아서 넘기기
                                    >
                    {item}
                </li>)
            }
        </ul>
    );
};

export default Test1paging;