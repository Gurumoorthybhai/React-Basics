import React, { useState, useCallback, useMemo } from 'react';

import Child from './callback-list'
export default function MainComponent() {


    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(1);

    const handleClick = () => {
        setCount((prevCount) => prevCount + 1);
    }

    const handleClick1 = () => {
        setCount1((prevCount) => prevCount + 1);
    }

    const getCount = useCallback(() => {
        return count
    }, [count]);

    console.log(' Parent Re-render');


    return (
        <>
            <h1> Parent Component</h1>
            <p> count 1</p>
            <button onClick={handleClick}>Click Me</button>
            <Child getCount={getCount} />
            <p> count 2- {count1}</p>
            <button onClick={handleClick1}>Click Me</button>
        </>
    )


}