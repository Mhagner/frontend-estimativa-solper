import React from 'react'

import Main from '../../Components/Main'
import MultForm from '../../Components/Forms/MultForm'


const Estimativa = () => {
    return (
        <Main titlePage="Nova Estimativa">
            <MultForm 
                buttonPrevious="info"
                buttonNext="success"
            />
        </Main>
    )
}

export default Estimativa