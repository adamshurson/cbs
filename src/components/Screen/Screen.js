import React, { Component } from 'react';
import './Screen.css';
import Title from "../Title/Title";
import Puzzle from "../Puzzle/Puzzle";

class Screen extends Component {
    render() {
        return (
            <div className='Screen relative w-screen h-screen flex flex-col items-center justify-center z-10'>
                <Puzzle/>
                <Title/>
            </div>
        );
    }
}

export default Screen;
