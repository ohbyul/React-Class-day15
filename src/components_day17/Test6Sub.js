import React, { useMemo } from 'react';

const getColor = (color) => {
    console.log( 'getColor');
    switch( color) {
        case 'pink' : return '분홍' ;
        case 'green' : return '초록' ;
        case 'blue' : return '파란' ;
        default : return '없음';
    }
}

const getFood = (food) => {
    console.log( 'getFood');
    switch( food) {
        case '만두' : return '만두는 맛있어' ;
        case '갈비' : return '갈비는 뭐..' ;
        case '불고기' : return '불고기..별로' ;
        case '과자' : return '과자는 홈런볼' ;
        default : return '없음';
    }
}


const Test6Sub = ({color, food}) => {

    //const colorInfo = getColor( color)
    //const foodInfo = getFood( food)
    

    const colorInfo = useMemo( () => getColor(color) ,[color] )
    const foodInfo = useMemo( () => getFood(food) ,[food]  )

    return (
        <div>
            <h4>좋아하는 색 : {color}</h4>
            <h5>색 설명 : {colorInfo} </h5>

            <h4>좋아하는 음식 : {food} </h4>
            <h5>음식 설명 : {foodInfo} </h5>
        </div>
    );
};

export default Test6Sub;