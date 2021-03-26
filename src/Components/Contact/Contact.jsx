import React from 'react';
import './Contact.css'
import Axios from "axios";
import swal from "sweetalert";
export default function Contact(){
    const [form, setForm] = React.useState(
        {
            name: '',
            email:'',
            msj:'',
            tel:'',
        }
    )
    const onChange = (e) => {
        console.log(form)
        setForm(() => ({
          ...form,
          [e.target.name]: e.target.value,
        }));
      };
    const onClick = () =>{
        swal({
            title: "Excelente",
            text: "Pronto se pondrán en contacto contigo",
            icon: "success",
            button: "Aceptar",
          })
        .then((respuesta) => {
        console.log(form)
        Axios.post('http://localhost:3001/email/',form)
        })
    }

    return (
        <div className='container1'>
            <div>
                <h1>Contacto</h1>
            </div>
        <div class="mb-3">
            <input name='name' onChange={onChange} type="text" class="form-control name" id="exampleFormControlInput1" placeholder="Nombre y Apellido"></input>
            <input name='email' onChange={onChange} type="email" class="form-control name" id="exampleFormControlInput1" placeholder="Email"></input>
            <input name='tel' onChange={onChange} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Teléfono"></input>        
        </div>
        <div class="mb-3">
            
            <textarea name='msj' onChange={onChange} class="form-control" id="exampleFormControlTextarea1"placeholder="Escribe tu mensaje" rows="3"></textarea>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button class="btn btn-primary me-md-2" type="button" onClick={onClick}>Enviar</button>
        </div>
      </div>
    )
}
