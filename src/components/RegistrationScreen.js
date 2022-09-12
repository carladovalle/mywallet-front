import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link, useNavigate} from "react-router-dom";

export default function Registration () {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    async function singUp(event) {

        event.preventDefault();

        const body = {
            name,
            email, 
            password,
            confirmPassword
        }

        try {

            await axios.post("http://localhost:5000/sign-up", body);

            navigate("/");

        } catch(error) {
            console.log(error);
        }
    }

    return (
        <RegistrationScreen>
            <Title>MyWallet</Title>
            <form onSubmit={singUp}>
                <Input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} required />
                <Input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <Input type="password" placeholder="Confirme a sua senha" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                <Button type="submit">Cadastrar</Button>
            </form>
            <GoToLogin>
                <Link to="/">
                    Já tem uma conta? Entre agora!
                </Link>
            </GoToLogin>
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
    margin-left: 20px;

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
    margin-left: 25px;

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