import React from 'react';
import styled from 'styled-components';

const ErrorStyles = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 20px;
    font-size: 1.1em;
    background-color: var(--color-error);
    color: #ffffff;
    padding: 10px;
`

const Error = ({error}) => (<ErrorStyles>{error}</ErrorStyles>);

export default Error;