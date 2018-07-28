import React, { Component } from 'react';
import './Puzzle.css';
import TopLeft from "./Pieces/TopLeft/TopLeft";
import BottomLeft from "./Pieces/BottomLeft/BottomLeft";

class Puzzle extends Component {
    render() {
        return (
            <div className='Puzzle flex flex-col'>
                <div className='flex'>
                    <TopLeft/>
                </div>
                <div className='flex'>
                    <BottomLeft/>
                </div>
            </div>
        );
    }
}

export default Puzzle;
