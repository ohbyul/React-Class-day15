import React, { useEffect, useState } from 'react';
import GlobalStyle from '../styled/Global'
import axios from 'axios'
import GallerySearch from './GallerySearch';
import GalleyList from './GalleyList';
import {Container} from '../styled/pixastyle'


const Gallery = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] =useState(true)
    const [error, setError] = useState('')
    const [text, setText] = useState('cat')
    
    useEffect ( () => {
        const API_KEY = '25011438-6012c8f4eab744aa18d86ca37'
        const url = `https://pixabay.com/api/?key=${API_KEY}&q=${text}&image_type=photo`
        axios.get(url)
            .then( res => {
                setData(res.data.hits)
                setIsLoading(false)
                setError('')
            })
            .catch( error => {
                setData([])
                setIsLoading(true)
                setError('에러발생')
            })
    },[text])

    const onSearch = (text)=> {
        setText (text)
    }

    return (
        <>
            <GlobalStyle />
            <Container>
                <GallerySearch onSearch= {onSearch} />
                {
                    isLoading && data.length === 0 && (<h1>NO IMAGE FOUNT</h1>)
                }
                {
                    data && !isLoading && <GalleyList data ={data}/>
                }
                <p>
                    {
                        error ? error : null
                    }
                </p>
            </Container>
        </>
    );
};

export default Gallery;