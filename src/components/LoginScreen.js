import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link, useNavigate} from "react-router-dom";

import UserContext from '../contexts/UserContext';

export default function Login () {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useContext(UserContext);

    const navigate = useNavigate();

    async function login(event) {

        event.preventDefault();

        const body = {
            email, 
            password
        }

        try {

            const { data } = await axios.post("http://localhost:5000/sign-in", body);
            setUser(data);
            navigate("/record");

        } catch(error) {
            console.log(error);
        }
    }

    return (
        <LoginScreen>
            <Title>MyWallet</Title>
            <form onSubmit={login}>
                <Input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <Input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <Button type="submit">Entrar</Button>
            </form>
            <GoToRegistration>
                <Link to="/sign-up">
                    Primeira vez? Cadastre-se!
                </Link>
            </GoToRegistration>
        </LoginScreen>
    )
}

const LoginScreen = styled.div`
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
    margin-top: 159px;
    margin-bottom: 24px;
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
const GoToRegistration = styled.div`
    color: #FFFFFF;
    font-size: 15px;
    font-weight: 700;
    margin-top: 36px;

    a {
        text-decoration: none;
    }
    &:hover {
        cursor: pointer;
    }
`