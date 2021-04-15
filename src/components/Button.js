import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES =['btn--primary', 'btn--outline']; //css classes that automaticaly get applied ! depending on what you pass in!

const SIZES = ['btn--meadium', 'btn--large'];



export const Button = ({ 
    children, 
    type,
    onClick,
    buttonStyle,
    buttonSize,
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) // creating the button style . and its going to be what you applied!
     ? buttonStyle
      : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]  // if true then set what we created , if not then set to the firet item in the array !  (medium OR Large)

    return (
        <Link to='/contact-information' className='btn-mobile'>
           <button // inside this button we are passing in the children, whatever you put inside the button "reaxt" is going to render that!
           className={`btn ${checkButtonStyle} ${checkButtonSize}`}
           onClick={onClick}
           type={type}
           >
                {children}   
           </button>
        </Link>
    )



};






