import React from 'react';
import '../Card/Card.css' 
import { useHistory } from "react-router-dom";
export default function CardVM(){
  const history = useHistory();
  const onClick= function(){
    history.push("http://localhost:3000/proyectos")
  }
    return (
        <div class="col">
        <div class="card cardd">
          <img src="https://biblus.accasoftware.com/es/wp-content/uploads/sites/3/2019/10/iVR-que-es-la-realidad-virtual-inmersiva-en-arquitectura.jpg" class="card-img-top" />
        <div class="card-body">
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn btn-primary me-md-2" onClick={onClick} type="button">VER MÁS</button>
        </div>
            <p class="card-text"></p>
          </div>
          </div>
      </div>
    )
}