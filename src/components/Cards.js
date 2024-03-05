import React from 'react'
import CardItem from './CardItem';
import './Cards.css';
function Cards() {
  return (
    <div className ='cards'>
        <h1>Check out these EPIC Destinations! </h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src='./water.jpg'
                    text='Explore the hidden waterfall deep inside the Amazon Jungle'
                    label='Adventure'
                    path='/services'
                    />
                    <CardItem 
                    src='./island.jpg'
                    text='Travel through the Islands of Bali in a Private Cruise'
                    label='Luxury'
                    path='/services'
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                    src='./stars.jpg'
                    text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                    label='Mystery'
                    path='/services'
                    />
                    <CardItem 
                    src='./football.jpg'
                    text='Experience football on Top of the Himalayan Mountains'
                    label='Adventure'
                    path='/services'
                    />
                    <CardItem 
                    src='./dessert.jpg'
                    text='Ride throught the Sahara Desert on a guided camel tour'
                    label='Adrenaline'
                    path='/services'
                    />
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Cards
