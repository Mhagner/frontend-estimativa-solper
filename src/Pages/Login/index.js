import React, { useEffect, useState } from 'react'
import ItemForm from '../../Components/ItemForm'
import { Auth, Cache } from 'aws-amplify'
import { notification } from 'antd'

const Login = () => {

    const [user, setUser] = useState('')
    const [signedIn, setSignedIn] = useState(false)
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [isSigningOut, setIsSigningOut] = useState(false)
    const [tokenId, setTokenId] = useState(false)
    const [refreshToken, setRefreshToken] = useState(false)

    notification.config({
        bottom: 50,
        duration: 2
    })

    useEffect(() => {
        setIsSigningIn(true)
        Auth.currentSession()
            .then((userSession) => {
                setSignedIn(true)
                setIsSigningIn(false)
                setTokenId(userSession.getIdToken().getJwtToken())
                setRefreshToken(userSession.getRefreshToken().getToken())
            })
            .catch((err) => {
                setIsSigningIn(false)
                console.log(err)
            });
    }, [])

    function handleChange(e) {
        const auxUser = { ...user }
        auxUser[e.target.name] = e.target.value
        setUser(auxUser)
    }

    function handleSubmit(e) {
        e.preventDefault();
        const { username, password } = user

        if (!signedIn) {
            setIsSigningIn(true)
            Auth.signIn({
                username,
                password
            }).then((cognitoUser) => {
                console.log("entrou")
                console.log(cognitoUser)

                Auth.currentSession()
                    .then((userSession) => {
                        setSignedIn(true)
                        setIsSigningIn(false)
                        setTokenId(userSession.getIdToken().getJwtToken())
                        setRefreshToken(userSession.getRefreshToken().getToken())
                    })
                    .catch((err) => {
                        setIsSigningIn(false)
                        notification.error({
                            message: 'Ops!',
                            description: err.toString()
                        })
                    })
            })
                .catch((err) => {
                    setIsSigningIn(false)
                    notification.error({
                        message: 'Ops!',
                        description: err.message
                    })
                })
        }
    }

    return (
        <form onSubmit={handleSubmit} className="needs-validation">
            <div className="row">
                <div className="col-md-4 mb-3">
                    <ItemForm
                        label="E-mail"
                        value={user.username}
                        onChange={handleChange}
                        placeholder="Informe o seu e-mail"
                        name="username"
                        type="text"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 mb-3">
                    <ItemForm
                        label="Senha"
                        value={user.password}
                        onChange={handleChange}
                        placeholder="Informe a sua senha"
                        name="password"
                        type="password"
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-2">
                    <button
                        type="submit"
                        className="btn btn-success">
                        <div className="icon-button">
                            Entrar
                          </div>
                    </button>
                </div>
            </div>
        </form >
    )
}

export default Login