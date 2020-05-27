import React from 'react'
import './style.css'

function Computador(props){
    return(
        <div className="circulo_comp" style={{ backgroundImage:`url(${props.imagem})`}}>

        </div>

    )
}

export default Computador;