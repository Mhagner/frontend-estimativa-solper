import styled from 'styled-components'

export const CardContainer = styled.div`
    width: 270px;
    height: 120px;
    margin-left: 16px;
    padding-left: 18px;
    border-radius: 3px;
    box-shadow: 0 1.5rem 4rem rgba(black, .15);
    transition: transform .3s;
    &:hover {
        transform: translateY(-1.2rem) scale(1.1);
    }
`

export const CardTitle = styled.p`
    width: 80px;
    height: 40px;
    margin-top: 10px;
    padding-top: 4px;
    font-size: 50px;
    font-weight: bold;
    letter-spacing: normal;
    color: white;
`

export const CardDescription = styled.p`
    width: 240px;
    height: 40px;
    margin-top: 10px;
    padding-top: 20px;
    font-size: 19px;
    font-style: normal;
    letter-spacing: normal;
    color: white;
`

