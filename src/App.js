import React, { useState, useEffect } from 'react'
import './dashboard.scss'
import '@aws-amplify/ui/dist/style.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import 'antd/dist/antd.css'

import Amplify from 'aws-amplify'
import Routes from './routes'

import { AmplifyAuthenticator, AmplifyForgotPassword, AmplifySignIn, AmplifyButton } from '@aws-amplify/ui-react'
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components'

import config from './aws-exports'

Amplify.configure(config)

function App() {
  const [authState, setAuthState] = useState()
  const [user, setUser] = useState()

  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      setAuthState(nextAuthState)
      setUser(authData)
    })
  }, [])

  return authState === AuthState.SignedIn && user ? (
    <Routes />
  ) : (
      <>
        <AmplifyAuthenticator>
          <AmplifySignIn
            slot="sign-in"
            //headerText="Autenticação de usuário"
            //submitButtonText="Entrar"
            hideSignUp
          />
          <AmplifyForgotPassword
           /*  formFields={[
              {
                type: "username",
                label: "Usuário",
                placeholder: "Digite o seu nome de usuário"
              }
            ]} */
            //headerText="Resetar sua senha"
            slot="forgot-password"
            sendButtonText="Enviar código"
          >
          </AmplifyForgotPassword>
        </AmplifyAuthenticator>
      </>
    );
}

export default App

