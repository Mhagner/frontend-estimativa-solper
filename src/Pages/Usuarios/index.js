import React from 'react';
import Main from '../../Components/Main'
import Breadcrumb from '../../Components/Breadcrumb'
import Amplify, { Auth, API } from 'aws-amplify';

const Usuario = () => {

  /* async function listEditors(limit) {
    let apiName = 'AdminQueries';
    let path = '/listUsers';
    let myInit = {
      queryStringParameters: {
        "groupname": "Pre_projeto",
        //"token": nextToken
      },
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
      }
    }
    const { NextToken, ...rest } = await API.get(apiName, path, myInit);
    console.log(NextToken)
    /* nextToken = NextToken;
    return rest; */
  

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
     {/*  <div className="row">
        <div className="col-md-6">
          <button onClick={() => listEditors(10)}>List Editors</button>
        </div>
      </div> */}
    </Main>
  );
};

export default Usuario;
