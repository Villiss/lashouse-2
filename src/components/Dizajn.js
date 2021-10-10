import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
    width: 100%;
    height: 100%;
    padding: 4rem 0rem;
    background-color: #E5E5E5;
`

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;

    h1 {
        margin-bottom: 1rem;
        font-size: 3rem;
        color: #1F1F1F;
        position: absolute;
        width: 100%;
        text-align: center;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`

const ColumnLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    margin: 2rem;
    order: ${({ reverse }) => ( reverse ? '2' : '1' )};

    p{
        margin-bottom: 2rem;
        color: #1F1F1F;
        font-size: 24px;
    }

    @media screen and (max-width: 768px){
        border-left: none;
        text-align: center;

        p {
            font-size: 18px;
        }

    }
`

const ColumnRight = styled.div`
    padding: 2rem;
    order: ${({ reverse }) => ( reverse ? '1' : '2' )};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;

    img {
        width: 100%;
    }


    @media screen and (max-width: 768px) {
        order: ${({ reverse }) => ( reverse ? '2' : '1' )};
        text-align: center;
    }
`


const Dizajn = ({heading, description, img, alt, reverse}) => {
    return (
        <Section name='/dizajn'>
            <Container>
            <h1>{heading}</h1>
                <ColumnLeft>
                    
                    <p>{description}</p>
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                    <img src={img} alt={alt}/>
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default Dizajn
