import React from 'react'

function ButtonStep(props) {
    return (
        <div className="btn-group col-md-12 mb-1">
            <button className={`btn btn-${props.colorPrevious}`} onClick={()=>props.funcPrevious()}>
                {props.buttonPrevious}
            </button>
            <button className={`btn btn-${props.colorNext}`} onClick={()=>props.funcNext()}>
                {props.buttonNext}
            </button>
        </div>
    )
}

export default ButtonStep