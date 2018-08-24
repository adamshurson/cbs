import React, { Component } from 'react';
import Puzzle from "../../../pearls/puzzle";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Projects extends Component {
    constructor() {
        super();
        this.state = {
            active: null
        };
        this.puzzle = new Puzzle();
    }
    componentDidMount() {
        this.puzzle.subscribe((puzzleState) => {
            this.setState({
                active: puzzleState.activePiece === 'BottomLeft' ? 'active' : ''
            });
        });
    }
    exit = () => {
        this.puzzle.setActivePiece(null);
    };
    render() {
        return (
            <div className={'Projects cover bg-white flex flex-col ' + this.state.active}>
                <div className={'flex items-center p-4'}>
                    <h1 className={'text-4xl text-purple border-b-4 border-purple font-accent'}>Projects</h1>
                    <FontAwesomeIcon onClick={this.exit} className={'ml-auto fa-2x cursor-pointer text-purple'} icon={'times'}/>
                </div>
                <div className={'flex flex-col flex-1 items-center justify-center overflow-auto p-4'}>
                    <h2 className={'text-5xl text-purple lg:mt-8 text-center font-normal font-accent mb-32'}>Coming Soon!</h2>
                </div>
            </div>
        );
    }
}
export default Projects;
