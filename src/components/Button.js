import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
    background: ${({ primary }) => (primary ? '#000d1a' : '#cd853f')};
    white-space: nowrap;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 200px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s ease-in-out;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ big }) => (big ? '16px 40px' : '14px 24px' )};
    color: ${({ primary }) => ( primary ? '#fff' : '#000d1a' )};
    font-size: ${({ big }) => ( big ? '20px' : '14px' )};

    &:hover {
        transform: translateY(-2px);
        background: #ff6600;
    }

    @media screen and (max-width: 768px){
        width: 400px;
    }
`