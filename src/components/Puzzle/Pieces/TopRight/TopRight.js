import React, { Component } from 'react';
import './TopRight.css';

class TopRight extends Component {
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
            <div className={'TopRight ' + this.state.loaded + ' piece rounded-tr-lg flex justify-center items-center cursor-pointer'}>
                <div className='puzzle-cover bg-white absolute rounded-full'/>
                <h3 className='text-purple text-2xl md:text-4xl font-accent relative pb-1'>
                    Services
                    <span className='bg-purple rounded-lg absolute pin-b pin-l pin-r'/>
                </h3>
            </div>
        );
    }
}

export default TopRight;
