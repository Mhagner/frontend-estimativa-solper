import React from "react";
import Main from "../../Components/Main"
import Card from "../../Components/Card"
import { Link } from "react-router-dom"

function Parametrizacoes() {
    return (
        <Main titlePage="Parametrizações">
            <div className="row">
                <div className="col-md-2">
                    <Link to="/parametrizacoes/usuarios">
                        <Card
                            title="Usuários"
                            imagem="https://img.icons8.com/bubbles/100/000000/edit-user.png"
                        />
                    </Link>
                </div>
                <div className="col-md-2">
                    <Link to="/parametrizacoes/estimativa">
                        <Card
                            title="Estimativas"
                            imagem="https://img.icons8.com/bubbles/100/000000/calculator.png"
                        />
                    </Link>
                </div>
                <div className="col-md-2">
                    <Link to="/parametrizacoes/clientes">
                        <Card
                            title="Clientes"
                            imagem="https://img.icons8.com/bubbles/100/000000/organization.png"
                        />
                    </Link>
                </div>
                <div className="col-md-2">
                    <Link to="/parametrizacoes/infra-nuvem">
                        <Card
                            title="Infra Nuvem"
                            imagem="https://img.icons8.com/bubbles/100/000000/cloud-sync.png"
                        />
                    </Link>
                </div>
            </div>
            <hr className="featurette-divider" />
        </Main>
    )
}

export default Parametrizacoes;