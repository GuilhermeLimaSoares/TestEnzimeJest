import React, { Component } from 'react';

class Counter extends Component {

    constructor(props){
        super(props);
        this.state = {};
        this.some = this.some.bind(this);
    }

    some(a, b){
        return a + b;
    }

    render() {
        <div className="Counter">
            <h2>Você tem {this.props.count} counter.</h2>

        </div>
    }
}

export default Counter;