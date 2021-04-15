import Recat from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection(){
    return (
        <div>
            <div className='hero-conatiner'>
                <video src='/videos/video-2.mp4' autoPlay loop muted />
                <h1>Hire Me</h1>
                <p>Lets get to the Code</p>
                <div className="hero-btns">
                    <Button className='btns' buttonStyle='btn--outline' 
                    buttonSize='btn--large'>GET Started
                    </Button>
                </div>

            </div>
            
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Get Started</Button>           
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Watch TRAILER <i className='far fa-play-circle' /> </Button>
            </div>
        </div>
    )
}


export default HeroSection