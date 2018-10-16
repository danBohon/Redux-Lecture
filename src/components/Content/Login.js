import React, { Component } from 'react';

export default class Login extends Component {
    constructor(){
        super()
        this.state = {
            name: ''
        }
    }


    render() {
        const {loginUser} = this.props
        return (
            <div>
                <h1>Login!</h1>
                <input value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
                <button onClick={() => loginUser(this.state.name)}>Submit</button>
            </div>
        );
    }
}