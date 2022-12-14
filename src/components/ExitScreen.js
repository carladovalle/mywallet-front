import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import UserContext from '../contexts/UserContext';

export default function Exit() {

    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");

    const navigate = useNavigate();

    const { user } = useContext(UserContext);

    async function exit(event) {

        event.preventDefault();

        const config = { 
            headers: {Authorization: `Bearer ${user.token}`}
        }

        const body = {
            value: parseFloat(value),
            description,
            type: "saida"
        }

        try {

            await axios.post("http://localhost:5000/transactions", body, config); 
            console.log("Sucesso");
            navigate("/record");

        } catch(error) {
            console.log(error);
        }
    }

    return (
        <ExitScreen>
            <Title>Nova Entrada</Title>
            <form onSubmit={exit}>
                <Input type="text" placeholder="Valor" value={value} onChange={(e) => setValue(e.target.value)} required />
                <Input type="text" placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} required />
                <Button type="submit">Salvar Saída</Button>
            </form>
        </ExitScreen>
    )
}

const ExitScreen = styled.div`
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