import React, { Component } from 'react';
import Puzzle from "../../../pearls/puzzle";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Services extends Component {
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
                active: puzzleState.activePiece === 'TopRight' ? 'active' : ''
            });
        });
    }
    exit = () => {
        this.puzzle.setActivePiece(null);
    };
    render() {
        return (
            <div className={'Services cover bg-white flex flex-col ' + this.state.active}>
                <div className={'flex items-center p-4'}>
                    <h1 className={'text-4xl text-purple border-b-4 border-purple font-accent'}>Services</h1>
                    <FontAwesomeIcon onClick={this.exit} className={'ml-auto fa-2x cursor-pointer text-purple'} icon={'times'}/>
                </div>
                <div className={'flex flex-col overflow-auto p-4'}>
                    <h2 className={'text-5xl text-purple lg:mt-8 text-center font-normal font-accent'}>A Simple Mission</h2>
                    <h3 className={'text-2xl mt-4 text-center text-purple font-normal'}>Make Your Home a More Livable One.</h3>
                    <div className={'min-h-fit-content flex mt-12 w-full self-center md:w-2/3 lg:w-1/2'}>
                        <div className={'ImageContainer self-center w-1/2 mr-4 border-2 border-purple overflow-hidden'}>
                            <img src={'/kitchen.png'} alt={''} className={'-mb-2'}/>
                        </div>
                        <p className={'w-1/2 pl-4 text-purple md:text-xl self-center font-thin leading-normal'}>
                            Creative Building Solutions combines over 50 years of carpentry experience to bring your dreams to life.
                            We believe you shouldn't have to change your neighborhood to have the living space you want.
                        </p>
                    </div>
                    <div className={'w-2/3 md:w-1/2 lg:w-1/3 self-center pt-px pb-px bg-purple mt-16 rounded'}/>
                    <h2 className={'text-5xl text-purple mt-12 text-center font-normal font-accent'}>Our Focus: You</h2>
                    <div className={'min-h-fit-content flex mt-12 w-full self-center md:w-2/3 lg:w-1/2'}>
                        <p className={'w-1/2 pr-4 text-purple md:text-xl self-center font-thin leading-normal text-right'}>
                            Many people feel disconnected from the remodelling process. You hire a contractor and expect to be included
                            in the decisions, but you're left out in the cold. Break free of stressful miscommunications in our
                            customer-centric process: one where the world revolves around <i>you</i>. See some of our satisfied
                            customers here.
                        </p>
                        <div className={'ImageContainer self-center w-1/2 ml-4 border-2 border-purple overflow-hidden'}>
                            <img src={'/kitchen2.png'} alt={''} className={'-mb-2'}/>
                        </div>
                    </div>
                    <div className={'w-2/3 md:w-1/2 lg:w-1/3 self-center pt-px pb-px bg-purple mt-16 rounded'}/>
                    <h2 className={'text-5xl text-purple mt-12 text-center font-normal font-accent'}>Build With Us.</h2>
                    <p className={'w-1/2 pr-4 mt-10 text-purple md:text-xl self-center font-thin leading-normal text-right'}>
                        From stunning kitchens, gorgeous bathrooms, and everything in between, we will work with you to
                        deliver your wildest dreams - and beyond.
                    </p>
                    <div className={'flex justify-center'}>
                        <button className={'mt-12 rounded focus:outline-none text-purple border-2 border-purple text-purple px-4 py-2 min-h-fit-content mb-12'}>Contact Us</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;
