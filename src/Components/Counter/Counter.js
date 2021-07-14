import React, { Component } from "react";

class Counter extends Component{
    static defaultProps = {
        step: 1,
    }

    handleIncrement(evt) {
        console.log("increment button was clicked!", evt);
        console.log('this.props: ', this.props);
    }

    handleDecrement(evt) {
        console.log("Decrement button was clicked!", evt);
        console.log("this.props: ", this.props);
    }

    render() {
        const { step } = this.props;

        return (
            <div>
                <span>0</span>
                <button type="button" onClick={this.handleIncrement.bind(this)}>Increment by {step}</button>
                <button type="button" onClick={this.handleDecrement.bind(this)}>Decrement by {step}</button>
            </div>
        );
    }
};

export default Counter;