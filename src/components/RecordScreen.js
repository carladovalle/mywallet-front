import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import UserContext from '../contexts/UserContext';

import Share from "./../assets/images/Share.png";
import More from "./../assets/images/more.png";
import Less from "./../assets/images/less.png";

export default function Record () {

    const { user } = useContext(UserContext);

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {

        async function getUserTransactions() {

            try {

                const config = {
                    headers: {
                        Authorization: `Bearer ${user.token}`
                    }
                }
        
                const { data } = await axios.get("http://localhost:5000/transactions", config);

                console.log(data);

                setTransactions(data);

            } catch (error) {
                    console.log(error.response);
            }
        }

        getUserTransactions();

    }, []);

    function renderTransactions() {

        return transactions.map((info, index) => (

            <p key = {index} style = {info.type === "entrada" ? { color: "green" } : { color: "red" }} >
                {info.createAt} {info.description} {info.value}
            </p>

        ));
    }

    function getBalance() {

        if (transactions.length > 0) {

            return transactions.reduce((valuePrevious, current) => {

                if (current.type === "entrada") {

                    return valuePrevious + current.value;

                }

                return valuePrevious - current.value;

            }, 0);

        } else {

            return 0;

        }

    }

    const balance = getBalance();

    return (
        <EntryScreen>
            <Title>
                <h1>Olá, {user.name}</h1>
                <Link to="/">
                    <img src={Share} />
                </Link>
            </Title>
            <Records>
                    {transactions.length > 0 ? (
                        <h2>
                            Minhas transacoes
                            <h2>{renderTransactions()}</h2>
                        </h2>
                    ) : (
                        <h2>
                            Não há registros de entrada e saída
                        </h2>
                    )}
                    <Result>
                        <h3>SALDO:</h3> <h5>{balance}</h5>
                    </Result>
            </Records>
            <Options>
                <Link to="/entry">
                    <NewEntry>
                            <img scr={More} />
                            <h4>Nova entrada</h4>
                    </NewEntry>
                </Link>
                <Link to="/exit">
                    <NewExit>
                            <img src={Less} />
                            <h4>Nova saída</h4>
                    </NewExit>
                </Link>
            </Options>
        </EntryScreen>
    )
}

const EntryScreen = styled.div`
    width: 375px;
    height: 667px;
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    font-family: 'Raleway', sans-serif;
`
const Title = styled.div`
    margin-top: 25px;
    margin-bottom: 26px;
    display: flex;
    flex-direction: row;

    h1 {
        color: #FFFFFF;
        font-size: 22px;
        font-weight: 700;
        color: #FFFFFF;
        margin-left: 24px;
    }
    img {
        margin-left: 165px;
    }
`
const Records = styled.div`
    background-color: #FFFFFF;
    width: 326px;
    height: 446px;
    border-radius: 5px;
    margin-left: 25px;

    h2 {
        color: #868686;
        font-size: 20px;
        font-weight: 400;
        text-align: center;
    }
`
const Result = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;

    h3 {
        color: #000000;
        font-size: 17px;
        font-weight: 700;
        margin-left: 15px;
    }
    h5 {
        color: #03AC00;
        font-size: 17px;
        font-weight: 400;
        margin-left: 100px;
    }
`
const Options = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 13px;
`
const NewEntry = styled.div`
    background-color: #A328D6;
    width: 155px;
    height: 114px;
    border-radius: 5px;
    margin-right: 15px;

    h4 {
        color: #FFFFFF;
        font-size: 17px;
        font-weight: 700;
        margin-left: 10px;
        margin-top: 32.56px;
    }
    img {
        margin-top: 10.56px;
        margin-left: 11.56px;
        width: 21.88px;
        height: 21.88px;
    }
`
const NewExit = styled.div`
    background-color: #A328D6;
    width: 155px;
    height: 114px;
    border-radius: 5px;

    h4 {
        color: #FFFFFF;
        font-size: 17px;
        font-weight: 700;
        margin-left: 10px;
        margin-top: 32.56px;
    }
    img {
        margin-top: 10.56px;
        margin-left: 11.56px;
        width: 21.88px;
        height: 21.88px;
    }
` 