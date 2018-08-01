import React, { Component } from 'react';
import './App.css';
import BackgroundVideo from "./components/BackgroundVideo/BackgroundVideo";
import Screen from "./components/Screen/Screen";

class App extends Component {
    constructor() {
        super();
    }
    componentDidMount() {

    }
    render() {
        return (
            <div className={'App w-screen h-screen overflow-hidden'}>
                <BackgroundVideo/>
                <Screen/>
            </div>
        );
    }
}

export default App;
