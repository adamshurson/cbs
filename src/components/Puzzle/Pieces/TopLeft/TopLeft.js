import React, { Component } from 'react';
import './TopLeft.css';

class TopLeft extends Component {
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
            <div className={'TopLeft ' + this.state.loaded + ' piece rounded-tl-lg flex justify-center items-center cursor-pointer'}>
                <div className='puzzle-cover bg-purple absolute rounded-full'/>
                <h3 className='text-white text-2xl md:text-4xl font-accent relative pb-1'>
                    Home
                    <span className='bg-white rounded-lg absolute pin-b pin-l pin-r'/>
                </h3>
            </div>
        );
    }
}

export default TopLeft;