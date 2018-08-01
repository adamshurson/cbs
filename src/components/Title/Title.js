import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
    constructor() {
        super();
        this.state = {
            active: false,
            loaded: ''
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loaded: 'loaded'
            });
        }, 250);
    }
    render() {
        return (
            <div className={'Title ' + this.state.loaded + ' text-white mt-10'}>
                <h1 className='text-2xl md:text-5xl text-center'>Creative Building Solutions</h1>
                <h2 className='text-xl md:text-4xl font-accent text-center mt-2'>Designs that fit your life.</h2>
            </div>
        );
    }
}

export default Title;
