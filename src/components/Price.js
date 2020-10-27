import React from 'react';
import styled from 'styled-components';

const PriceWrapper = styled.div`
    width: 30%;
    margin-left: 5px;
    display: flex;
    color: var(--color-price);
    justify-content: space-evenly;
    border-radius: 4px;
    
`
const PriceStyles = styled.div`
    :nth-child(-n+${props => props.price}) {
        color: var(--color-icon);
    }
`

const Price = ({ price }) => {
    return (
        <PriceWrapper>
            <PriceStyles price={price}>
                <i className="fas fa-dollar-sign"></i>
            </PriceStyles>
            <PriceStyles price={price}>
                <i className="fas fa-dollar-sign"></i>
            </PriceStyles>
            <PriceStyles price={price}>
                <i className="fas fa-dollar-sign"></i>
            </PriceStyles>
            <PriceStyles price={price}>
                <i className="fas fa-dollar-sign"></i>
            </PriceStyles>
        </PriceWrapper>
    )
}

export default Price;
