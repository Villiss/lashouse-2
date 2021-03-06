import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
    width: 100%;
    height: 120%;
    padding: 4rem 0rem;
    background-color: #1F1F1F;
`

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;

    h1 {
        margin-bottom: 1rem;
        font-size: 3rem;
        color: #fff;
        position: absolute;
        width: 100%;
        text-align: center;
    }

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

    

    p{
        margin-bottom: 2rem;
        color: #fff;
        font-size: 24px;
    }

    @media screen and (max-width: 900px){
        p {
            font-size: 18px;
        }

    }

    @media screen and (max-width: 768px){
        border-left: none;
        border-top: 6px solid #ff6600;
        text-align: center;

        div{
            width: 100%;
        }
        
    }
`

const ColumnLeft = styled.div`
    padding: 2rem;
    order: ${({ reverse }) => ( reverse ? '1' : '2' )};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem;

    h2 {
        color: #fff;
        margin: 2rem;
    }

    li {
        position: relative;
        display: block;
        padding: 1em;
        margin: 0.5em;
        color: #fff;
        text-decoration: none;
        border-radius: 0.3em;
        transition: all 0.3s ease-out;

        &:hover {
            background: #eee;
            color: #000;
            cursor: pointer;
        }
        &:before {
            position: absolute;
            left: -1.3em;
            top: 50%;
            margin-top: -1.3em;
            background: #ff6600;
            height: 2em;
            width: 2em;
            line-height: 2em;
            text-align: center;
            font-weight: bold;
            border-radius: 2em;
            transition: all 0.3s ease-out;
        }

    }


    @media screen and (max-width: 768px) {
        order: ${({ reverse }) => ( reverse ? '2' : '1' )};
        text-align: center;

        li {
            padding: 10px;
            margin: 0;
        }
    }
`
const VerticalLine = styled.hr`
    width: 6px;
    position: absolute;
    left: 50%;
    background-color: #ff6600;
    height: 700px;
    margin-top: 100px;
    border: none;
    display: block;

    @media screen and (max-width: 768px){
        display: none;
    }
`



const Technologia = ({heading, paragraphOne, reverse}) => {
    return (
        <Section name='/technologia'>
            <Container>
            <h1>{heading}</h1>
                <ColumnLeft>

                                    <ul>
                                    <h2>Skladba steny ktor?? po????vame</h2>

                                    <li>S??drovl??knit?? doska hr??bka 12,5 mm ( FERMACELL )</li>
                                    <li>Paropriepustn?? f??lia ( JUTAFOL )</li>
                                    <li>Nosn?? kon??trukcia ??? pozinkovan?? oce?? hr??bka 120 mm ( LINDAB )</li>
                                    <li>Akustick?? miner??lna vlna hr??bka 160 mm ( KNAUF Decibel TI140)</li>
                                    <li>S??drovl??knit?? doska hr??bka 12,5 mm ( FERMACELL )</li>
                                    <li>Dif??zna f??lia Lindab Contact Foil 95</li>
                                    <li>Fas??dna miner??lna vlna hr??bka 100 mm ( KNAUF FKD-S )</li>
                                    <li>Sklotextiln?? mrie??ka OMFA / VERTEX 145g</li>
                                    <li>Silik??nov?? omietka BAUMIT AT, PROHET</li>
                                    </ul>              
                </ColumnLeft>
                <VerticalLine />
                <ColumnRight reverse={reverse}>
                    
                    <p>{paragraphOne}</p>
                    <div>
                        <img src='images/logo_lindab.png'/>
                    </div>
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default Technologia
