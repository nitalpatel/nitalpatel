import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out My Profile </h1>
            <div className='cards__container'>
            <div className='cards__wrapper'>
               <ul className='cards__items'>
                 <CardItem 
                 src='images/img-9.jpg'
                 text='Explore my profile, to get a better understanding of what value I can bring to your firm'
                 label='Hire me'
                 path='/services'
                 />
                     <CardItem 
                 src='images/img-2.jpg'
                 text='check out my Resume'
                 label='Resume'
                 path='/services'
                 />
                   </ul> 
                </div>  
            </div>
        </div>
    )
}


export default Cards;