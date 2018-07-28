import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
    render() {
        return (
            <div className='Title text-white mt-10'>
                <h1 className='text-2xl md:text-5xl text-center'>Creative Building Solutions</h1>
                <h2 className='text-xl md:text-4xl font-accent text-center mt-2'>Designs that fit your life.</h2>
            </div>
        );
    }
}

export default Title;
