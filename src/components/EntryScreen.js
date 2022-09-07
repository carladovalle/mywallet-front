import React from 'react';
import styled from 'styled-components';

export default function Entry () {
    return (
        <EntryScreen>
            <Title>Nova Entrada</Title>
            <Input placeholder="Valor" />
            <Input placeholder="Descrição" />
            <Button>Salvar Entrada</Button>
        </EntryScreen>
    )
}

const EntryScreen = styled.div`
    width: 375px;
    height: 667px;
    background-color: #8C11BE;
    align-items: center;
    font-family: 'Raleway', sans-serif;
`
const Title = styled.div`
    font-size: 26px;
    font-weight: 700;
    color: #FFFFFF;
    padding-top: 25px;
    margin-bottom: 40px;
    margin-left: 24px;
`
const Input = styled.input`
    background-color: #FFFFFF;
    width: 326px;
    height: 58px;
    border-radius: 5px;
    margin-bottom: 13px;
    margin-left: 18px;

    &::placeholder {
        color: #000000;
        font-size: 20px;
        font-weight: 400;
    }
`
const Button = styled.button`
    background-color: #A328D6;
    width: 326px;
    height: 46px;
    border-radius: 5px;
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #A328D6;
    margin-left: 22px;

    &:hover {
        cursor: pointer;
    }
`
