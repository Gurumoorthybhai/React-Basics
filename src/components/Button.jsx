
function Button() {


    function handleButton() {
        alert('Button Clicked');
    }

    return (
        <>
            <button onClick={handleButton}>I'm button</button>
        </>
    );
}

export default Button;