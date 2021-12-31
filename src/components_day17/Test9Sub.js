/*
import React from 'react';

const Test9Sub = ({title , cnt}) => {
    console.log({title} , {cnt});
    return (
        <div>
            <h1>
                {title} / {cnt}
            </h1>
        </div>
    );
};

export default React.memo(Test9Sub);
*/
//export default Test9Sub;
// React.memo붙이면 실행되는 부모 컨퍼넌트만 실행 된다.
//rscm 

import React, { memo } from 'react';

const Test9Sub = memo(({title , cnt}) => {
    console.log({title} , {cnt});
    return (
        <div>
            <h1>
                {title} / {cnt}
            </h1>
        </div>
    );
});

export default Test9Sub;
