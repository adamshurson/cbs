import React, { Component } from 'react';
import Puzzle from '../../../../pearls/puzzle';

class BottomRight extends Component {
    constructor() {
        super();
        this.state = {
            active: false,
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
        this.puzzle.subscribe((puzzleState) => {
            this.setState({
                active: puzzleState.activePiece === 'BottomRight',
                otherActive: puzzleState.activePiece !== null && puzzleState.activePiece !== 'BottomRight'
            });
        });
    }
    getActiveClass() {
        return (this.state.active ? 'active' : (this.state.otherActive ? 'otherActive' : ''));
    }
    setActive = () => {
        this.puzzle.setActivePiece('BottomRight');
    };
    render() {
        return (
            <div onClick={this.setActive} className={this.state.loaded + ' ' + this.getActiveClass() + ' BottomRight piece rounded-br-lg flex items-center justify-center cursor-pointer'}>
                <div className='puzzle-cover bg-purple absolute rounded-full'/>
                <h3 className='text-white text-2xl md:text-4xl xl:text-5xl font-accent relative pb-1'>
                    Contact
                    <span className='bg-white rounded-lg absolute pin-b pin-l pin-r'/>
                </h3>
            </div>
        );
    }
}

export default BottomRight;
