import React, { Component } from 'react';
import Puzzle from "../../pearls/puzzle";

class Title extends Component {
    constructor() {
        super();
        this.state = {
            pieceActive: '',
            loaded: ''
        };
        this.puzzle = new Puzzle();
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loaded: 'loaded'
            });
        }, 250);
        this.puzzle.subscribe((newPuzzleState) => {
           this.setState({
               pieceActive: newPuzzleState.activePiece !== null
           });
        });
    }
    getActiveClass() {
        return (this.state.pieceActive ? 'activePiece' : '');
    }
    render() {
        return (
            <div className={'Title ' + this.state.loaded + ' ' + this.getActiveClass() + ' text-white mt-10'}>
                <h1 className='text-2xl md:text-5xl text-center'>Creative Building Solutions</h1>
                <h2 className='text-xl md:text-4xl font-accent text-center mt-2'>Designs that fit your life.</h2>
            </div>
        );
    }
}

export default Title;
