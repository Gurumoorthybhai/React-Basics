import React, { useState, useMemo, useEffect } from "react";
// import MemoList from '../useMemo/memo-list';

function Parent() {

    const [number, setNumber] = useState(0);
    const [grey, setGrey] = useState(true);

    const doubleNumber = useMemo(() => {
        return longRunningFunction(number)
    }, [number]);
    // const [theme, setTheme] = useState({});

    // let grey = true;
    const theme = useMemo(() =>
    ({
        color: grey ? '#333' : '#fff',
        backgroundColor: grey ? '#fff' : '#333'
    })
        , [grey]);



    useEffect(() => {
        console.log(' Theme Change');

    }, [theme]);

    function longRunningFunction(number) {
        console.log(' n - ', number);

        for (let i = 0; i < 100000000000000000000000000n; i++) {
            return number * 10000000000000;
        }
        // return [number, number+1, number+2];
    }

    return (
        <>
            <div>
                <input type="number" onChange={(e) => setNumber(parseInt(e.target.value))} />
                <button type="button" onClick={() => setGrey(!grey)}>Change Theme</button>
                <div style={theme}>{doubleNumber}</div>




                {/* <MemoList {...{generateNumber, number}} />
  </div> */}
            </div>
        </>
    );
}

export default Parent;
