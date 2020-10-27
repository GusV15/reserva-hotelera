import React from 'react';
import styled from 'styled-components';
import { days, months } from '../scripts/data';

const HeaderStyles = styled.header`
    width: 100%;
    height: 140px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: flex-start;
    background-color: var(--bg-color-header);
    color: var(--color-text-general);
    padding-left: 40px;
    .title-container h1{
        font-size: 1.6em;
        font-weight: 500;
        padding-bottom: 5px;
    }
    .info-container p {
        font-size: 0.9em;
        font-weight: 100;
        letter-spacing: 0.3px;
    }
    .info-container p span {
        font-weight: 500;
    }
    @media screen and (max-width: 796px) {
        width: 90%;
        padding: 0;
        align-items: center;
    }
    @media screen and (max-width: 610px) {
        .info-container p {
            font-size: 0.7em;
        }
    }
    @media screen and (max-width: 500px) {
        .info-container p {
            font-size: 0.6em;
            padding: 0px 10px;
            text-align: center;
        }
    }
`

const Header = ({ dateFrom, dateUntil }) => {
    // Retorna un template string con el día, mes y año seleccionados en los filtros por fecha.
    const setDate = (date) => {
        const dateSelect = new Date(date);
        return `${days[dateSelect.getDay()]}, ${dateSelect.getDate()} de ${months[dateSelect.getMonth()]} de ${dateSelect.getFullYear()}`
    };

    return (
        <HeaderStyles>
            <div className="title-container">
                <h1>Reserva de Hoteles</h1>
            </div>
            <div className="info-container">
                <p>desde el <span>{setDate(dateFrom)}</span> hasta el <span>{setDate(dateUntil)}</span></p>
            </div>
        </HeaderStyles>
    )
}

export default Header;