import React, { Component } from 'react';
import './BottomRight.css';

class BottomRight extends Component {
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
            <div className={'BottomRight ' + this.state.loaded + ' piece rounded-br-lg flex items-center justify-center cursor-pointer'}>
                <div className='puzzle-cover bg-purple absolute rounded-full'/>
                <h3 className='text-white text-2xl md:text-4xl font-accent relative pb-1'>
                    Contact
                    <span className='bg-white rounded-lg absolute pin-b pin-l pin-r'/>
                </h3>
            </div>
        );
    }
}

export default BottomRight;
