import React from 'react'
import styled from 'styled-components'

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
    border-left: 6px solid #ff6600;
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

    @media screen and (max-width: 768px){
        border-left: none;
        border-top: 6px solid #ff6600;
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
        margin: 1rem auto;
    }

    @media screen and (max-width: 768px) {
        order: ${({ reverse }) => ( reverse ? '2' : '1' )};
    }
`



const Technologia = ({heading, paragraphOne, reverse}) => {
    return (
        <Section id='technologia'>
            <Container>
                <ColumnLeft>

                                    <ol className='customlist'>
                                    <h2>Skladba steny ktorú požívame</h2>

                                    <li>Sádrovláknitá doska hrúbka 12,5 mm ( FERMACELL )</li>
                                    <li>Paropriepustná fólia ( JUTAFOL )</li>
                                    <li>Nosná konštrukcia – pozinkovaná oceľ hrúbka 120 mm ( LINDAB )</li>
                                    <li>Akustická minerálna vlna hrúbka 160 mm ( KNAUF Decibel TI140)</li>
                                    <li>Sádrovláknitá doska hrúbka 12,5 mm ( FERMACELL )</li>
                                    <li>Difúzna fólia Lindab Contact Foil 95</li>
                                    <li>Fasádna minerálna vlna hrúbka 100 mm ( KNAUF FKD-S )</li>
                                    <li>Sklotextilná mriežka OMFA / VERTEX 145g</li>
                                    <li>Silikónová omietka BAUMIT AT, PROHET</li>
                                    </ol>
                            {/* <div className="home__img-wrapper">
                                <img src='../../../images/tech.jpg' alt='Alt' className="home__img" />
                            </div> */}
                    
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <img src='images/logo_lindab.png'/>
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default Technologia
