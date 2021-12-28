import React, { useEffect, useState } from 'react';
import GlobalStyle from '../styled/Global'
import styled from 'styled-components'
import axios from 'axios'
import GallerySearch from './GallerySearch';
import GalleyList from './GalleyList';

const Container = styled.div`
    width : 1400px ; margin : 0 auto;
`

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
    },[])
    return (
        <>
            <GlobalStyle />
            <Container>
                <GallerySearch />
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