import React from 'react';
import Main from '../../Components/Main'
import Breadcrumb from '../../Components/Breadcrumb'

const Usuario = () => {
  const lista = [
    {
      link: "/parametrizacoes",
      descricao: "Parametrizações"
    },
    {
      descricao: "Usuários",
      current: 'page'
    },
  ]
  return (
    <Main titlePage="Usuários">
      <div className="row">
        <div className="col-md-6">
          <Breadcrumb
            lista={lista}
          />
        </div>
      </div>
    </Main>
  );
};

export default Usuario;
