import React from 'react';

const Test10Count = ({count , text}) => {
    console.log(count , text);
    return (
        <div>
            <h2>{count} / {text} </h2>
        </div>
    );
};

export default  React.memo(Test10Count);