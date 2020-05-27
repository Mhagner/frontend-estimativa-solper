import React from "react";
import Main from "../../Components/Main"
import CardBox from "../../Components/CardBox"
import Computador from "../../Components/Computador"
import Imagem from "../../Components/Computador/image/Computador.jpg"


function Contato() {
    return (
        <Main titlePage="Contato">
            <CardBox color="blue" titleNumber="50" description="BancoDeDados" />
         
            <div className="row">
                <Computador imagem={Imagem} />
            </div>


        </Main>
    )
}

export default Contato;