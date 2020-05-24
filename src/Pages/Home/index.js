import React from 'react'

import Main from '../../Components/Main'
import CardBox from '../../Components/CardBox'

function Home() {
    return (
        <Main titlePage="Dashboard">
            <div className="row">
                <CardBox 
                    titleNumber="16"
                    description="Estimativas Workflow"
                    color="#ffac12"
                />
            </div>
        </Main>
    )
}

export default Home