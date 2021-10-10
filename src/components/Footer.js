import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Container = styled.div`
  background-color: #1e1e1e;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Section = styled.section`
  max-width: 1000px;
  width: 100%;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 768px){
    flex-direction: column;
  }
`

const Logo = styled(Link)`
  color: #fff;
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  @media screen and (max-width: 768px){
    margin: 20px;
  }
`

const LasHouse = styled.small`
  color: #fff;
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`

function Footer() {
  return (
    <Container>
      <Section>
        <Wrapper>
            <Logo to={'//www.lindab.com/sk/pro/pages/default.aspx?redirecttoproorhome=true&i=2685/'} target='_blank'>
            <img src='/images/logo_lindab.png' alt='Lindab'/>
            </Logo>
          <LasHouse>lashouse © {new Date().getFullYear()}</LasHouse>
            <Logo to={'//www.apex-arch.sk/'} target='_blank'>
              <img src='../images/logo_apex.png' alt='Apex'/>
            </Logo>
        </Wrapper>
      </Section>
    </Container>
  );
}

export default Footer;