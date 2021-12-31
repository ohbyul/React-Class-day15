import React, { useCallback, useMemo, useState } from 'react';

const Test8 = () => {
    const [text, setText] = useState('')
    const [data, setData] = useState([])

    const onAdd = useCallback(() => {
        setData ( [...data,text])
        setText('')
    },[data , text])

    const textSize = useMemo( () => {
        return text.length
    },[text])
    
    return (
        <div>
           <input type ="text" value = {text} onChange={ e => setText(e.target.value) } />
           <button onClick={onAdd}> 추가 </button> 
           <hr />
           <h3>{text}</h3>
           <h3>{text.length}</h3>
           <hr />
           <h3>수업용 : {textSize} </h3>
            <hr />
           <ul>
               {
                   data.map ( (item, index) => <li key={index}>
                       {index} / {item}
                   </li>)
               }
           </ul>
        </div>
    );
};

export default Test8;