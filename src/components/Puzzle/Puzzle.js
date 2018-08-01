import React, { Component } from 'react';
import './Puzzle.css';
import TopLeft from "./Pieces/TopLeft/TopLeft";
import TopRight from "./Pieces/TopRight/TopRight";
import BottomRight from "./Pieces/BottomRight/BottomRight";
import BottomLeft from "./Pieces/BottomLeft/BottomLeft";

class Puzzle extends Component {
    render() {
        return (
            <div className='Puzzle flex flex-col'>
                <div className='flex'>
                    <TopLeft/>
                    <TopRight/>
                </div>
                <div className='flex'>
                    <BottomLeft/>
                    <BottomRight/>
                </div>
            </div>
        );
    }
}

export default Puzzle;
