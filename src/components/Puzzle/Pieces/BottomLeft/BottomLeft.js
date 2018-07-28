import React, { Component } from 'react';
import './BottomLeft.css';

class BottomLeft extends Component {
    constructor() {
        super();
        this.state = {
            active: false,
            loaded: ''
        }
    }
    componentDidMount() {
        this.setState({
            loaded: 'loaded'
        });
    }
    render() {
        return (
            <div className={'BottomLeft ' + this.state.loaded + ' piece rounded-bl-lg flex justify-center'}>
                <div className='puzzle-cover bg-grey absolute rounded-full'/>
            </div>
        );
    }
}

export default BottomLeft;
