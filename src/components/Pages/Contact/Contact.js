import React, { Component } from 'react';
import Puzzle from "../../../pearls/puzzle";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Contact extends Component {
    constructor() {
        super();
        this.state = {
            active: null,
            message: "",
            email: "",
            name: ""
        };
        this.puzzle = new Puzzle();
    }
    componentDidMount() {
        this.puzzle.subscribe((puzzleState) => {
            this.setState({
                active: puzzleState.activePiece === 'BottomRight' ? 'active' : ''
            });
        });
    }
    setName(evt) {
        this.setState({
            name: evt.target.value
        });
    }
    setEmail(evt) {
        this.setState({
            email: evt.target.value
        });
    }
    setMessage(evt) {
        this.setState({
            message: evt.target.value
        });
    }
    exit = () => {
        this.puzzle.setActivePiece(null);
    };
    render() {
        return (
            <div className={'Contact cover bg-purple flex flex-col ' + this.state.active}>
                <div className={'flex items-center p-4'}>
                    <h1 className={'text-4xl text-purple-lighter border-b-4 border-purple-lighter font-accent'}>Contact</h1>
                    <FontAwesomeIcon onClick={this.exit} className={'ml-auto fa-2x cursor-pointer text-purple-lighter'} icon={'times'}/>
                </div>
                <div className={'flex flex-col flex-1 lg:flex-row p-4 w-full md:w-2/3 lg:w-1/2 lg:self-center items-center overflow-auto'}>
                    <div className={"flex flex-col w-full lg:w-1/2 min-h-fit-content lg:pr-8"}>
                       <h2 className={'text-5xl text-center lg:text-left text-white text-center font-normal font-accent'}>Contact Us</h2>
                        <p className={'mt-8 text-white text-center lg:text-left md:text-xl font-thin leading-normal'}>
                            3183 N. Country Lane, Waukegan IL, 60087
                        </p>
                        <p className={'mt-8 text-white text-center lg:text-left md:text-xl font-thin leading-normal'}>
                            info@cbsolutions.net
                        </p>
                        <p className={'mt-8 text-white text-center lg:text-left md:text-xl font-thin leading-normal'}>
                            847-775-9368
                        </p>
                    </div>
                    <form className={"flex flex-col w-full lg:w-1/2 mt-12 lg:mt-0 min-h-fit-content lg:pl-8"}>
                        <input className={"border-2 border-white px-4 py-2 font-accent text-3xl text-white bg-transparent focus:outline-none"} value={this.state.name} type={"text"} onChange={(evt) => this.setName(evt)} placeholder={"Your Name"}/>
                        <input className={"mt-8 border-2 border-white px-4 py-2 font-accent text-3xl text-white bg-transparent focus:outline-none"} value={this.state.email} type={"email"} onChange={(evt) => this.setEmail(evt)} placeholder={"Your Email"}/>
                        <textarea className={"mt-8 border-2 border-white px-4 py-2 font-accent text-3xl text-white bg-transparent focus:outline-none"} value={this.state.message} onChange={(evt) => this.setMessage(evt)} placeholder={"Your Message"}/>
                        <div className={'flex justify-center mb-32 pb-32 lg:mb-0 lg:pb-0'}>
                            <button className={'mt-12 rounded focus:outline-none text-white border-2 border-white text-white px-4 py-2 min-h-fit-content'}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;
