import React, { useState } from 'react';
import {ImageForm} from '../styled/pixastyle'


const GallerySearch = ({onSearch}) => {

    const [text,setText] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()
        if(!text) return
        onSearch(text)
    }
    return (
        <ImageForm onSubmit ={onSubmit}>
            <div>
                <input type="text" value ={text} onChange ={e => setText(e.target.value)} />
                <button type="submit">검색</button>
            </div>
        </ImageForm>
    );
};

export default GallerySearch;