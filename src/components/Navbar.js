import React from 'react'
import styled, {css} from 'styled-components'
import { Link } from 'react-scroll'
import { menuData } from '../data/MenuData'
import { Button } from './Button'
import { FaBars } from 'react-icons/fa'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Nav = styled.nav`
    height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;
    background: rgba(0,0,0,0.5);
    backdrop-filter: blur(10px);
`

const NavLink = css`
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s ease-in-out;

    &:hover{
        color: #ff6600;
    }
`

const Logo = styled(Link)`
    ${NavLink}
    font-style: italic;
`

const MenuBars = styled(FaBars)`
    display: none;

    &:hover {
        color: #ff6600;
    }

    @media screen and (max-width: 768px){
        display: block;
        height: 40px;
        width: 40px;
        color: white;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-50%, 25%);
        transition: 0.3s ease-in-out;
    }
`

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px){
        display: none;
    }
`
const NavMenuLinks = styled(Link)`
    ${NavLink}
`

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

const Navbar = ({toggle}) => {
    return (
        <Nav>
            <Logo smooth to='/'>LASHOUSE</Logo>
            <MenuBars onClick={toggle} />
            <NavMenu>
                {menuData.map((item, index)=> (
                    <NavMenuLinks smooth to={item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button smooth to='/kontakt' primary='true'>Kontakt</Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
