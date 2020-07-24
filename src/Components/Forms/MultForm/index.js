import React from 'react'
import { useForm, useStep } from 'react-hooks-helper'

import EscopeInformation from '../EscopeInformation'
import MainEstimate from '../MainEstimate'
import OutherEstimates from '../OutherEstimates'
import Overview from '../Overview'
import Mainternance from '../Mainternance'
import { defaultData, steps } from './data'

const MultForm = ({ images, buttonPrevious, buttonNext }) => {
    const [formData, setForm] = useForm(defaultData)
    //const [custoInfra, setCustoInfra] = useState(custoInfraDefault)
    const { step, navigation } = useStep({ initialStep: 0, steps })
    const { id } = step

    const props = {
        formData, setForm, navigation, buttonNext, buttonPrevious
    }

    switch (id) {
        case "escope":
            return <EscopeInformation {...props} />
        case "estimate":
            return <MainEstimate {...props} />
        case "outher":
            return <OutherEstimates {...props} />
        case "maintenance":
            return <Mainternance {...props} />
        case "overview":
            return <Overview {...props} />
        default:
            return null
    }
}

export default MultForm