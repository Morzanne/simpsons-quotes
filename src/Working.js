import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';

class Working extends Component {
    constructor(props) {
        super(props);
        this.state = {
            working: true
        };
    }

    handleClick = () => {
        this.setState({
            working: !this.state.working
        })
    };
    render() {
        const workingHomer = this.state.working ? 'Homer bosse !' : 'Homer ne bosse pas'
        const animation = this.state.working ? "App-logo" : "App-other-logo"
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className={animation} alt="logo" />
                    <div>
                        <button className="workingButton" onClick={this.handleClick}>{workingHomer}</button>
                    </div>
                </header>
            </div>
        );
    }

}

export default Working;