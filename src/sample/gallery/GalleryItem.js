import React from 'react';
import styled from 'styled-components';

const ImageBox = styled.article`

`

const GalleryItem = ({item}) => {
    const {webformatURL} = item
    return (
        <div>
            <ImageBox>
                <img src={webformatURL} alt="" /> 
            </ImageBox>
        </div>
    );
};

export default GalleryItem;