import React from 'react'

import Main from '../../Components/Main'
import CardBox from '../../Components/CardBox'
import LogoFlow from '../../Components/CardBox/images/fundo_wkf.svg'
import LogoInt from '../../Components/CardBox/images/fundo_int.svg'
import LogoCust from '../../Components/CardBox/images/fundo_cust.svg'

function Home() {
    return (
        <Main titlePage="Dashboard">
            <div className="row">
              {/*   <div className="col-4">
                    <CardBox
                        titleNumber="16"
                        description="Estimativas Workflows"
                        color="#ffac12"
                        image={LogoFlow}
                    />
                </div>
                <div className="col-4">
                    <CardBox
                        titleNumber="28"
                        description="Estimativas Integrações"
                        color="#F66955"
                        image={LogoInt}
                    />
                </div>
                <div className="col-4">
                    <CardBox
                        titleNumber="22"
                        description="Estimativas Customizações"
                        color="#BA79CB"
                        image={LogoCust}
                    />
                </div> */}
            </div>
        </Main>
    )
}

export default Home