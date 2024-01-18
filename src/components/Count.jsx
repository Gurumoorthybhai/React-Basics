import { useState } from 'react';

function Count() {

    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(prevCount => prevCount + 1);
    }

    return (
        <>
            Count - {count}
            <button onClick={handleClick}> Clicked {count} Times</button>
        </>
    )
}

export default Count;