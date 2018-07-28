import React, { Component } from 'react';
import './BackgroundVideo.css';

class BackgroundVideo extends Component {
    constructor() {
        super();
        this.state = {
            url: 'timelapse.mp4'
        };
    }
    render() {
        return (
            <div className='BackgroundVideo absolute pin flex items-center justify-center'>
                <video playsInline loop autoPlay muted>
                    <source src={this.state.url} type='video/mp4'/>
                </video>
                <div className='cover z-10 absolute'/>
            </div>
        );
    }
}

export default BackgroundVideo;
