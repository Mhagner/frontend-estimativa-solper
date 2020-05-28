import React from 'react'
import * as S from './styled'

function DivSidebar(props) {
    return (
        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
            <S.Section>{props.description}</S.Section>
        </h6>
    )
}

export default DivSidebar