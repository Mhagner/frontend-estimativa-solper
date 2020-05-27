import React from 'react'
import * as S from './styled'

function CardBox(props) {
    return (
        <S.CardContainer 
            style={{ 
                backgroundColor: props.color, 
                backgroundImage: `url(${props.image})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom right',
            }}>
            <S.CardTitle>{props.titleNumber}</S.CardTitle>
            <S.CardDescription>{props.description}</S.CardDescription>
        </S.CardContainer>
    )
}

export default CardBox