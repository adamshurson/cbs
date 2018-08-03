import React, { Component } from 'react';
import Title from "../Title/Title";
import Puzzle from "../Puzzle/Puzzle";

class Screen extends Component {
    render() {
        return (
            <div className='Screen absolute overflow-hidden pin flex flex-col items-center justify-center z-10'>
                <Puzzle/>
                <Title/>
            </div>
        );
    }
}

export default Screen;
