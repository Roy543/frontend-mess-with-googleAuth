import React from 'react'
import '../css/home-cards.css'
import Home from './Home'
//import image from './assets/Home.jpg'

function CardContainer() {
    //console.log("CardContainer rendered");
    return (
        <div className="full-container-fluid">
            <img className="img-fluid" id="home-img" src="https://images.unsplash.com/photo-1571162478581-ad3d0c1057ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="home-banner"/>
        </div>
    )
}

export default React.memo(CardContainer)

//<img className="img-fluid" id="home-img" src="https://i.pinimg.com/originals/33/ef/8b/33ef8b9c0b902154a6cd4103a21275ef.jpg" alt="home-banner"/>