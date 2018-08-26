import React, { Component } from 'react';
import Puzzle from "../../../pearls/puzzle";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Services extends Component {
    constructor() {
        super();
        this.services = {
            "Kitchens": {
                name: "Kitchens",
                img: "http://images.traditionalhome.mdpcdn.com/sites/traditionalhome.com/files/article/zac26510_rgb.jpg",
                tagline: "Bring Out Your Inner Chef",
                description1: "You deserve a kitchen made for royalty. It's time to transform your kitchen into a place you would gladly go for dinner.",
                description2: "From stainless steel appliances to gorgeous islands, Creative Building Solutions can help you put your own unique touch on your new masterpiece.",
                nextService: "Bedrooms",
                previousService: "Bathrooms",
            },
            "Bedrooms": {
                name: "Bedrooms",
                img: "http://awfco.com/wp-content/uploads/2017/01/C6236A_AntiqueWalnut_Bedroom.jpg",
                tagline: "Designed From Ahh to Zzz",
                description1: "Build the palace of your dreams. Finally get the walk-in closet you've been waiting for, or the relaxation space you deserve.",
                description2: "Bedrooms should be your crown jewel, not something you are embarrassed to show to your neighbors. Together, we can fix that.",
                nextService: "Bathrooms",
                previousService: "Kitchens",
            },
            "Bathrooms": {
                name: "Bathrooms",
                img: "https://bethanydillon.com/wp-content/uploads/2018/04/senior-friendly-bathroom.jpeg",
                tagline: "Relaxation Redefined",
                description1: "Let your imagination run wild and get lost in the bubbles. You deserve a bathroom that makes you forget how long you've been in the shower.",
                description2: "Put the rest back in restroom and let us create the bathroom you've always wanted.",
                nextService: "Kitchens",
                previousService: "Bedrooms",
            }
        };
        this.swipeProps = {
            threshold: 50,
            hasSwipedOnce: false
        };
        this.state = {
            active: null,
            currentService: "Kitchens",
            swipeDetect: {
                swipeDir: null,
                startX: null,
                startY: null,
                distX: null,
                distY: null
            },
            lastSwipeDir: "left"
        };
        this.puzzle = new Puzzle();
    }
    touchStart(evt) {
        this.setState({
            swipeDetect: {
                swipeDir: null,
                dist: 0,
                startX: evt.changedTouches[0].pageX,
                startY: evt.changedTouches[0].pageY
            }
        });
    }
    touchEnd(evt) {
        this.setState({
            swipeDetect: {
                distX: evt.changedTouches[0].pageX - this.state.swipeDetect.startX,
                distY: evt.changedTouches[0].pageY - this.state.swipeDetect.startY
            }
        }, () => {
            let swipeDir = null;
            if (Math.abs(this.state.swipeDetect.distX) >= this.swipeProps.threshold) {
                swipeDir = (this.state.swipeDetect.distX < 0) ? 'left' : 'right';
            } else if (Math.abs(this.state.swipeDetect.distY) >= this.swipeProps.threshold) {
                swipeDir = (this.state.swipeDetect.distY < 0) ? 'up' : 'down';
            }
            if (swipeDir === "left") {
                this.swipeLeft();
            } else if (swipeDir === "right") {
                this.swipeRight();
            }
        });
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
    setActive(serviceKey) {
        this.setState({
            currentService: serviceKey
        });
    }
    renderServiceDot(serviceKey) {
        return (
            <div key={serviceKey} onClick={() => this.setActive(serviceKey)} className={(this.state.currentService === serviceKey ? "bg-purple" : "bg-grey") + " cursor-pointer h-4 w-4 mx-2"} />
        )
    }
    getServiceClass(serviceKey) {
        if (this.state.currentService === serviceKey) {
            return "";
        } else {
            return "offscreen-" + this.state.lastSwipeDir;
        }
    }
    renderService(serviceKey) {
        return (
            <div className={this.getServiceClass(serviceKey) + " absolute pin slider flex flex-col min-h-fit-content items-center p-4 pb-12 lg:pb-4"}>
                <h2 className={'text-5xl text-purple lg:mt-8 text-center font-normal font-accent'}>{this.services[serviceKey].name}</h2>
                    <img className={"mt-4 w-full lg:w-2/3 xl:w-1/3 h-auto self-center"} src={this.services[serviceKey].img} alt={this.services[serviceKey].tagline} />
                <h3 className={'text-3xl lg:text-4xl w-full lg:w-2/3 xl:w-1/3 mt-4 text-center text-purple font-normal font-accent'}>{this.services[serviceKey].tagline}</h3>
                <p className={'text-md lg:text-lg w-full lg:w-2/3 xl:w-1/3 mt-4 text-center text-purple font-normal'}>{this.services[serviceKey].description1}</p>
                <p className={'text-md lg:text-lg w-full lg:w-2/3 xl:w-1/3 mt-4 text-center text-purple font-normal mb-16 lg:mb-0'}>{this.services[serviceKey].description2}</p>
            </div>
        );
    }
    swipeRight() {
        this.setState({
            currentService: this.services[this.state.currentService].previousService,
            lastSwipeDir: "right"
        });
        this.swipeProps.hasSwipedOnce = true;
    }
    swipeLeft() {
        this.setState({
            currentService: this.services[this.state.currentService].nextService,
            lastSwipeDir: "left"
        });
        this.swipeProps.hasSwipedOnce = true;
    }
    render() {
        return (
            <div className={'Services cover bg-white flex flex-col ' + this.state.active}>
                <div className={'flex items-center p-4 z-40'}>
                    <h1 className={'text-4xl text-purple border-b-4 border-purple font-accent'}>Services</h1>
                    <FontAwesomeIcon onClick={this.exit} className={'ml-auto fa-2x cursor-pointer text-purple'} icon={'times'}/>
                </div>
                <div className={(this.swipeProps.hasSwipedOnce ? "fadeDown" : "") + " z-50 items-center fixed flex lg:hidden pin-b pin-l pin-r p-8 bg-purple text-white text-center"}>
                    <FontAwesomeIcon className={"fa-2x"} icon={"angle-left"}/>
                    <span className={"flex-1 text-xl lg:hidden"}>Swipe to see more!</span>
                    <FontAwesomeIcon className={"ml-auto fa-2x"} icon={"angle-right"}/>
                </div>
                <div className={"absolute z-10 pin-t pin-b pin-l hidden lg:flex items-center justify-center px-12 text-purple cursor-pointer"} onClick={() => this.swipeRight()}>
                    <FontAwesomeIcon className={"fa-3x"} icon={"angle-left"}/>
                </div>
                <div className={"absolute z-10 pin-t pin-b pin-r hidden lg:flex items-center justify-center px-12 text-purple cursor-pointer"} onClick={() => this.swipeLeft()}>
                    <FontAwesomeIcon className={"fa-3x"} icon={"angle-right"}/>
                </div>
                <div onTouchStart={(evt) => this.touchStart(evt)} onTouchEnd={(evt) => this.touchEnd(evt)} className={'relative flex-1 overflow-x-hidden overflow-y-scroll'}>
                    {
                        Object.keys(this.services).map( serviceKey => this.renderService(serviceKey))
                    }
                </div>
                <div className={"fixed pin-b pin-l pin-r p-4 lg:p-8 flex items-center justify-center bg-transparent"}>
                    {
                        Object.keys(this.services).map( serviceKey => this.renderServiceDot(serviceKey))
                    }
                </div>
            </div>
        );
    }
}

export default Services;
