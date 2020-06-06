import React from 'react'
import { useForm, useStep } from 'react-hooks-helper'

import EscopeInformation from '../EscopeInformation'
import MainEstimate from '../MainEstimate'
import OutherEstimates from '../OutherEstimates'
import Overview from '../Overview'
import Submit from '../Submit'

const steps = [
    { id: "escope" },
    { id: "estimate" },
    { id: "outher" },
    { id: "overview" },
    { id: "submit" }
];

const defaultData = {
    responsibleEscope: "",
    responsibleEstimate: "",
    date: "",
    client: "",
    opportunityNumber: ""
};


const MultForm = ({ images, buttonPrevious, buttonNext  }) => {
    const [formData, setForm] = useForm(defaultData)
    const { step, navigation } = useStep({ initialStep: 0, steps })
    const { id } = step

    const props = { formData, setForm, navigation, buttonNext, buttonPrevious }

    switch (id) {
        case "escope":
            return <EscopeInformation {...props} /> 
        case "estimate":
            return <MainEstimate {...props} />
        case "outher":
            return <OutherEstimates {...props} />
        case "overview":
            return <Overview {...props} />
        case "submit":
            return <Submit {...props} /> 
        default:
            return null
    }
}

export default MultForm