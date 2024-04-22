#react hooks

// for every state changes => react re-renders the component, means it recreated a functions etc,. so functions are not same for each render.

<!-- react useCallback() vs useMemo -->

which helps in optimizing performance by memorizing function, or memorizing values. 

<!-- useCallback() --> 
when function are passed a props to child component, functions are not same for each render, so useCallback returns a memorized version of function, with the help of useCallback(), function will be re-created only if dependence value changes.

// function will be re-created only when count value changes

const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
}, [count])

return (
    <p> Count - {count}</p>
    <button onClick = {handleClick}></button>
)