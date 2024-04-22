import React from 'react';
export default class CounterClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }


    componentDidMount() {
        document.title = `You Clicked button ${this.state.count} times`;
    }

    componentDidUpdate() {
        document.title = `You Clicked button ${this.state.count} times`;
    }


    handleClick = () => {
        // this.setState((prevState) => ({ count: this.state.count + 1 }));

        this.setState((prevState) => ({ count: prevState.count + 1 }));
    }

    render() {
        return (
            <>
                <p>Count - {this.state.count}</p>
                <button onClick={this.handleClick}>Click</button>
            </>
        );
    }
}