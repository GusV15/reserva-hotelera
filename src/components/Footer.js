import React from 'react';
import styled from 'styled-components';

const FooterStyles = styled.footer`
    width: 100%;
    height: 35px;
    margin-bottom: 1px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    background-color: var(--bg-color-filters);
    color: var(--color-text-general);
    p {
        font-size: 0.8em;
    }
`

const Footer = () => {
    return (
        <FooterStyles>
            <p>Copyright &copy; 2020 by Gustavo Velasquez, todos los derechos reservados.</p>
        </FooterStyles>
    )
}

export default Footer;