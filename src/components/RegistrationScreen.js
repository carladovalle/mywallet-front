import React from 'react';
import styled from 'styled-components';

export default function Registration () {
    return (
        <RegistrationScreen>
            <Title>MyWallet</Title>
            <Input placeholder="Nome" />
            <Input placeholder="E-mail" />
            <Input placeholder="Senha" />
            <Input placeholder="Confirme a sua senha" />
            <Button>Cadastrar</Button>
            <GoToLogin>Já tem uma conta? Entre agora!</GoToLogin>
        </RegistrationScreen>
    )
}

const RegistrationScreen = styled.div`
    width: 375px;
    height: 667px;
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Raleway', sans-serif;
`
const Title = styled.div`
    font-size: 32px;
    font-weight: 400;
    color: #FFFFFF;
    margin-top: 95px;
    margin-bottom: 28px;
    font-family: 'Saira Stencil One', cursive;
`
const Input = styled.input`
    background-color: #FFFFFF;
    width: 326px;
    height: 58px;
    border-radius: 5px;
    margin-bottom: 13px;

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

    &:hover {
        cursor: pointer;
    }
`
const GoToLogin = styled.div`
    color: #FFFFFF;
    font-size: 15px;
    font-weight: 700;
    margin-top: 32px;

    a {
        text-decoration: none;
    }
    &:hover {
        cursor: pointer;
    }
`