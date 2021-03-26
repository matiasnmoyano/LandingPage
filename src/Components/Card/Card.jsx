import React from 'react';
import '../Card/Card.css' 

export default function Card({img,client,description}){
    return (
        <div class="col">
        <div class="card cardd">
          <img src={img} class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">{client}</h5>
            <p class="card-text">{description}</p>
          </div>
        </div>
      </div>
    )
}

{/*  */}