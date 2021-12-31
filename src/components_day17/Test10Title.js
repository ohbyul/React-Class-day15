import React from 'react';

const Test10Title = () => {
    console.log('Test10Title');
    return (
        <div>
            <h4>컴포넌트의 return값을 기억할때 React.memo(컴포넌트) , recm</h4>
        </div>
    );
};

export default React.memo(Test10Title);