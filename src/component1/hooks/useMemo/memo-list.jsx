import React, {useState, useEffect} from "react";

function MemoList({ number, generateNumber}) {


    const [lists, setLists] = useState([]);
    
    useEffect(() => {

        const result = generateNumber(number);
        setLists(result);
        console.log(`list number - ${number} list - ${lists}`);
        
    }, [number]);
    
  return(
    <>
  <p>MemoList</p>
<div>
<ul>
{ lists.length && lists.map((val, index) => {
    return <li key={index}>{val}</li>
})
}
</ul>
</div>
    </>
  );
}

export default MemoList;
