import React from 'react';
import styled from 'styled-components';
import { SIZE } from '../scripts/data'

const FiltersStyles = styled.section`
    width: 100%;
    background-color: var(--bg-color-filters);
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    align-items: center;
    .icon-container {
        position: relative;
        display: flex;
        flex-flow: row nowrap;
    }
    .icon-container input {
        width: 100%;
        margin: 10px 5px;
        height: 35px;
        padding-left: 35px;
        outline: none;
        border: none;
        border-radius: 3px;
        cursor: pointer;
    }
    .icon-container .icon-input {
        position: absolute;
        right: 160px;
        top: 20px;
        color: var(--color-icon);
    }
    .icon-container select {
        width: 165px;
        height: 35px;
        margin: 10px 5px;
        padding-left: 32px;
        outline: none;
        border: none;
        border-radius: 3px;
        cursor: pointer;
    }
    .icon-container .icon-select {
        position: absolute;
        right: 143px;
        top: 20px;
        color: var(--color-icon);
    }
    .icon-container option.options {
        font-size: 1em;
    }
    .icon-container option.options-one {
        padding: 0px; !important
    }

    @media screen and (max-width: 986px) {
        .card-container {
            width: 35%;
        }
        .location-container p {
            font-size: 0.8em;
        }
        .rooms-container p {
            font-size: 0.8em;
        }
        .text-container p {
            min-height: 170px;
            font-size: 0.85em;
        }
    }
    @media screen and (max-width: 796px) {
        width: 90%;
    }
    @media screen and (max-width: 440px) {
        flex-flow: column wrap;
        .icon-container {
            width: 300px;
        }
        .icon-container .icon-input {
            right: 270px;
        }
        .icon-container select {
            width: 300px;
        }
        .icon-container .icon-select {
            right: 270px;
        }
    }
`

const Filters = ({
    handleCategoryChange,
    dateFrom,
    dateTo,
    today
}) => {
    
    const handleChange = ({ target: {name, value} }) => {
        handleCategoryChange(name, value);
    }

    return (
        <FiltersStyles>
            <div className="icon-container">
                <i className="fas fa-sign-in-alt icon-input"></i>
                <input
                    min={today}
                    name="dateFrom"
                    type="date"
                    value={dateFrom}
                    onChange={handleChange}
                />
            </div>
            <div className="icon-container">
                <i className="fas fa-sign-out-alt icon-input"></i>
                <input
                    min={today}
                    name="dateTo"
                    type="date"
                    value={dateTo}
                    onChange={handleChange}
                />
            </div>
            <div className="icon-container">
                <i className="fas fa-globe icon-select"></i>
                <select onChange={handleChange} name="country">
                    <option className="options" value="">Todos los países</option>
                    <option className="options" value="Argentina">Argentina</option>
                    <option className="options" value="Brasil">Brasil</option>
                    <option className="options" value="Chile">Chile</option>
                    <option className="options" value="Uruguay">Uruguay</option>
                </select>
            </div>
            <div className="icon-container">
                <i className="fas fa-dollar-sign icon-select"></i>
                <select onChange={handleChange} name="price">
                    <option className="options" value="">Cualquier precio</option>
                    <option className="options" value="1">$</option>
                    <option className="options" value="2">$$</option>
                    <option className="options" value="3">$$$</option>
                    <option className="options" value="4">$$$$</option>
                </select>
            </div>
            <div className="icon-container">
                <i className="fas fa-bed icon-select"></i>
                <select onChange={handleChange} name="rooms">
                    <option className="options" value="">Cualquier tamaño</option>
                    <option className="options-one" value={SIZE.s}>Hotel pequeño</option>
                    <option className="options" value={SIZE.m}>Hotel mediano</option>
                    <option className="options" value={SIZE.l}>Hotel grande</option>
                </select>
            </div>
        </FiltersStyles>
    )
}

export default Filters;