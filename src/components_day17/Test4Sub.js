import React, { useEffect } from 'react';



let num = 0 
    
const Test4Sub = () => {
    useEffect( () => {
        return (num++)
    })
    return (
        <div>
            <h4>Test4Sub : {num}</h4>
        </div>
    );
};

export default Test4Sub;