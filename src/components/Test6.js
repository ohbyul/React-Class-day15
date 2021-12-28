import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'


const Container = styled.div`
    width:1400px; margin : 20px auto; display : flex; flex-wrap : wrap; 

    `
const Article = styled.article`
    width : 300px; padding : 5px; border : 1px solid black; margin-bottom : 20px;
    a{
        color : red; text-decoretion : none;
        h2{
            font-size : 20px;
        }
        img{
            width : 300px; height : 200px;
        }
        p{
            font-size : 15px;
        }
    }
`



const Test6 = () => {
    const [data , setData] = useState([])

    useEffect( () => {
        const url = 'https://newsapi.org/v2/everything?q=tesla&from=2021-11-28&sortBy=publishedAt&apiKey=60d985cda5014bce8177303c8a6ddcd6'
        axios.get(url)
            .then( res => setData( res.data.articles))
    },[])

    return (
        <Container>
            {
                data.map (( item ,index) => <Article key={index}>
                    <a href={item.url} target="_blank">
                        <h2>{item.title}</h2>
                        <img src={item.urlToImage} alt={item.title}/>
                        <p> {item.description}</p>
                    </a>
                </Article>)
            }
        </Container>
    );
};

export default Test6;


//60d985cda5014bce8177303c8a6ddcd6
//뉴스 api키
