import React from 'react';
import styled from 'styled-components';
import Price from './Price';

const HotelsCardStyles = styled.section`
    width: 100%;
    min-height: 500px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    aling-items: center;
    background-color: var(--bg-color-body);
    .card-container {
        width: 30%;
        margin: 1.25em;
        border-radius: 0.625em;
        box-shadow: 0px 0px 3px 3px var(--color-icon);
        background-color: var(--bg-color-card);
    }
    .img-container img {
        width: 100%;
        height: 240px;
        object-fit: cover;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
    .text-container {
        margin: 15px;
        line-height: 20px;
    }
    .text-container h2 {
        margin-bottom: 15px;
        font-size: 1.2em;
        font-weight: 800;
        letter-spacing: 0.5px;
        color: #323232;
    }
    .text-container p {
        min-height: 180px;
        font-size: 0.95em;
        font-weight: 500;
        letter-spacing: 0.3px;
        color: var(--color-text-card);
        overflow: auto;
    }
    .location-container {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 71%;
        height: 35px;
        margin: 15px;
        background-color: var(--bg-color-filters);
    }
    .location-container .icon {
        margin: 12px;
        font-size: 18px;
        color: var(--color-text-general);
        background-color: var(--bg-color-filters);
    }
    .location-container p {
        width: 87%;
        font-size: 0.9em;
        color: var(--color-text-card);
        background-color: var(--color-icon);
        line-height: 35px;
        letter-spacing: 0.2px;
        text-align: center;
    }
    .rooms-container {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 85%;
        height: 35px;
        margin: 15px;
        background-color: var(--bg-color-filters);
    }
    .rooms-container .icon {
        margin: 12px;
        font-size: 18px;
        color: var(--color-text-general);
        background-color: var(--bg-color-filters);
    }
    .rooms-container p {
        width: 55%;
        font-size: 0.9em;
        color: var(--color-text-card);
        background-color: var(--color-icon);
        line-height: 35px;
        letter-spacing: 0.2px;
        text-align: center;
    }
    .rooms-container .price-container {
        width: 30%;
        display: flex;
        color: var(--color-text-general);
        justify-content: space-evenly;
        border-radius: 4px;
    }
    .button-container button {
        width: 100%;
        height: 55px;
        font-size: 1em;
        font-weight: 500;
        letter-spacing: 0.4px;
        color: var(--color-text-general);
        background-color: var(--bg-color-header);
        outline: none;
        border: none;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        cursor: pointer;
    }

    @media screen and (max-width: 1200px) {
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
    @media screen and (max-width: 1010px) {
        .card-container {
            width: 42%;
        }
        .location-container p {
            font-size: 0.7em;
        }
        .rooms-container p {
            font-size: 0.7em;
        }
        .text-container p {
            min-height: 170px;
            font-size: 0.75em;
        }
    }
    @media screen and (max-width: 796px) {
        .card-container {
            width: 55%;
        }
    }
    @media screen and (max-width: 650px) {
        .card-container {
            width: 60%;
        }
    }
    @media screen and (max-width: 610px) {
        .card-container {
            width: 75%;
        }
    }
    @media screen and (max-width: 500px) {
        .card-container {
            width: 100%;
        }
    }
`

const HotelsCard = ({ hostels }) => {
    return (
        <HotelsCardStyles>
            {
                (hostels.map(({ photo, name, description, city, country, rooms, price }, i) => {
                    return (
                        <div key={i} className="card-container">
                            <div className="img-container">
                                <img src={photo} alt={name} />
                            </div>
                            <div className="text-container">
                                <h2>{name}</h2>
                                <p>{description}</p>
                            </div>
                            <div className="location-container">
                                <i className="fas fa-map-marker icon"></i>
                                <p>
                                    {`${city}, ${country}`}
                                </p>
                            </div>
                            <div className="rooms-container">
                                <i className="fas fa-bed icon"></i>
                                <p>
                                    {`${rooms} Habitaciones`}
                                </p>
                                <Price price={price} />
                            </div>
                            <div className="button-container">
                                <button>Reservar</button>
                            </div>
                        </div>
                    )
                }))
            }
        </HotelsCardStyles>
    )
}

export default HotelsCard;