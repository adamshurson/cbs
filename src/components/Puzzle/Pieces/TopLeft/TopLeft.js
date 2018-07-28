import React, { Component } from 'react';
import './TopLeft.css';

class TopLeft extends Component {
    render() {
        return (
            <div className='TopLeft piece rounded-tl-lg'>
                <div className='absolute pin-b pin-l pin-r flex justify-center' />
            </div>
        );
    }
}

export default TopLeft;
