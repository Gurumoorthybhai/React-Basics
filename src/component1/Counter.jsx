import React, { useState, useEffect } from 'react';



// react hook follows a sequence of step to make the rendering flow smooth
export default function Counter() {


    /* const [count, setCount] = useState(0);


    // useEffect will run, once DOM got updated

    useEffect(() => {

        document.title = `You Clicked button ${count} times`;

        return () => {

        };
    }, [count]);

    function handleClick() {
        setCount((prevCount) => prevCount + 1);
    } */


    // return (
    //     <>
    //         <div>
    //             <p>Count - {count}</p>
    //             <button onClick={handleClick}>Clice Me</button>
    //         </div>
    //     </>
    // )


    // ======


    // hooks follows a sequence of steps

    // first render 

    // 1. Initialize the 'name' state variable with ('Guru')
    // 2. Add an effect for persisting the form
    // 3. Initialize the 'surname' state varibale with ('M')
    // 4. Add an effect for updating document title

    // second render

    // 1. Read the 'name' state variable (without argument)
    // 2. Replace the effect for persisting the form
    // 3. Read the 'surname' state variable (without argument)
    // 4. Replace the effect for updating the title 


    const [name, setName] = useState('Guru');

    // if(name != null) {
    // useEffect(() => {   // React Hook "useEffect" is called conditionally.
    //     localStorage.setItem('formData', name);
    // });
    // }
    

    useEffect(() => {
    
        if(name!= null) {
            localStorage.setItem('formData', name);
        }
      return () => {
      };
    });
    
    const [surname, setSurname] = useState('M');

    useEffect(() => {
        document.title = `Web - ${name}-${surname}`;
    });


    // lazy init

    // const [state, setState] = useState(() => {
    //     const initialValue = someExpensiveOpertation(prop);
    //     return initialValue;
    // })

    

    return (
        <>
            <p>{name}-{surname}</p>
        </>
    )




    
}