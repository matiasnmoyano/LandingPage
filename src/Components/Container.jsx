import React from 'react';
import './Container.css'
import Banner from './Banner/Banner.jsx'
import CardContainer from './CardContainer/CardContainer.jsx'
import Contact from './Contact/Contact'

export default function Container(){
    return (
        <div >
        <Banner/>
        
        <CardContainer></CardContainer>
        
        <Contact></Contact>
        </div>
    )
}