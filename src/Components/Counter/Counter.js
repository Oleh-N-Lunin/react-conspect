import React, { Component } from "react";

class Counter extends Component{
    static defaultProps = {
        step: 1,
        initialValue: 0,
    };

    state = {
        value: this.props.initialValue,
    };


    handleIncrement = evt => {
        console.log("increment button was clicked!", evt);
        console.log('this.props: ', this.props);
    }

    handleDecrement = evt => {
        console.log("Decrement button was clicked!", evt);
        console.log("this.props: ", this.props);
    }

    render() {
        const { step } = this.props;

        return (
            <div>
                <span>{this.state.value}</span>
                <button type="button" onClick={this.handleIncrement}>Increment by {step}</button>
                <button type="button" onClick={this.handleDecrement}>Decrement by {step}</button>
            </div>
        );
    }
};

export default Counter;