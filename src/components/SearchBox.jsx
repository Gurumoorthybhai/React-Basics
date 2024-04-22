import React, { useState } from 'react';
export default function SearchBox() {

    const [task, setTask] = useState("");

    const handleAdd = () => {
        const url = 'http://localhost:3001/add';
        fetch(url,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ task })
            }).then(res => {
                console.log('res ', res);

            }).catch(err => console.log('err ', err));
    }

    return (
        <>
            <div>
                <input type="text" className='input' id='input-field' placeholder='Enter your task' onChange={(e) => setTask(e.target.value)} />
                <button type="button" className='submit-btn' onClick={handleAdd}>Add</button>
            </div>
        </>
    )
}

