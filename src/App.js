import React, { Component } from 'react';
import './App.css';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import BackgroundVideo from "./components/BackgroundVideo/BackgroundVideo";
import Screen from "./components/Screen/Screen";

library.add(fas);

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
