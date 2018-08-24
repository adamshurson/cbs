import React, { Component } from 'react';
import Puzzle from "../../../../pearls/puzzle";
import Projects from "../../../Pages/Projects/Projects";

class BottomLeft extends Component {
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
                active: puzzleState.activePiece === 'BottomLeft',
                otherActive: puzzleState.activePiece !== null && puzzleState.activePiece !== 'BottomLeft'
            });
        });
    }
    getActiveClass() {
        return (this.state.active ? 'active' : (this.state.otherActive ? 'otherActive' : ''));
    }
    setActive = () => {
        this.puzzle.setActivePiece('BottomLeft');
    };
    render() {
        return (
            <div>
                <div onClick={this.setActive} className={this.state.loaded + ' ' + this.getActiveClass() + ' BottomLeft piece rounded-bl-lg flex items-center justify-center cursor-pointer'}>
                    <div className='puzzle-cover bg-white absolute rounded-full'/>
                    <h3 className='text-purple text-2xl md:text-4xl xl:text-5xl font-accent relative pb-1'>
                        Projects
                        <span className='bg-purple rounded-lg absolute pin-b pin-l pin-r'/>
                    </h3>
                </div>
                <Projects active={this.getActiveClass()}/>
            </div>
        );
    }
}

export default BottomLeft;
