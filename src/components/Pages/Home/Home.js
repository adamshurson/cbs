import React, { Component } from 'react';
import Puzzle from "../../../pearls/puzzle";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Home extends Component {
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
                active: puzzleState.activePiece === 'TopLeft' ? 'active' : ''
            });
        });
    }
    exit = () => {
        this.puzzle.setActivePiece(null);
    };
    render() {
        return (
            <div className={'Home cover bg-purple p-4 flex flex-col ' + this.state.active}>
                <div className={'flex items-center'}>
                    <h1 className={'text-4xl text-purple-lighter border-b-4 border-purple-lighter font-accent'}>Home</h1>
                    <FontAwesomeIcon onClick={this.exit} className={'ml-auto fa-2x cursor-pointer text-purple-lighter'} icon={'times'}/>
                </div>
            </div>
        );
    }
}

export default Home;
