import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;
    background-color: #1F1F1F;
`

const Container = styled.div`
    padding: 3rem calc((100vw - 1300px) /2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`

const ColumnRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    margin: 2rem;
    order: ${({ reverse }) => ( reverse ? '2' : '1' )};

    h1 {
        margin-bottom: 1rem;
        font-size: clamp(1.5rem, 6vw, 2rem);
        color: #fff;
    }

    p{
        margin-bottom: 2rem;
        color: #fff;
    }
`

const ColumnLeft = styled.div`
    padding: 1rem 2rem;
    order: ${({ reverse }) => ( reverse ? '1' : '2' )};
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        order: ${({ reverse }) => ( reverse ? '2' : '1' )};
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 200px;

        @media screen and (max-width: 768px){
            width: 90%;
            height: 90%;
        }
    }
`


const Technologia = ({heading, paragraphOne, paragraphTwo, buttonLabel, reverse, image}) => {
    return (
        <Section id='technologia'>
            <Container>
                <ColumnLeft>
                <img src={image} alt='dom'/>
                    
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default Technologia
