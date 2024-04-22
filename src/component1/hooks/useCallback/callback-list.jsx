import React, { useState, useEffect, memo } from "react";

function Child({ getCount }) {

    const [count, setCount] = useState();

    useEffect(() => {

        console.log(' Inside Child Render ');

        const count = getCount();
        setCount(count);

    }, [getCount]);

    console.log(' Outside Child Render ');
    return (
        <>
            <h3>Child</h3>
            <p>Get count - {count}</p>

        </>);
}

export default Child;
