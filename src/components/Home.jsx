import { useState } from 'react';
import SearchBox from './SearchBox';
function Home() {


    const [todo, Settodo] = useState(['List Item 1', 'List Item 2', 'List Item 3', 'List Item 4', 'List Item 5']);




    return (
        <>
            <div className="container">
                <h2>TODO List</h2>
                <SearchBox />
                {
                    todo.length === 0 ? <h3>No record found</h3> :
                        todo.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                }
            </div>
        </>
    )
}

export default Home;