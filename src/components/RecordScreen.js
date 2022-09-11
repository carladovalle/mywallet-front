import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import TokenContext from "../contexts/TokenContext";

import Share from "./../assets/images/Share.png";
import More from "./../assets/images/more.png";
import Less from "./../assets/images/less.png";

export default function Entry () {

    const { token } = useContext(TokenContext);

    return (
        <EntryScreen>
            <Title>
                <h1>Olá, fulano</h1>
                <img src={Share} />
            </Title>
            <Records>
                <h2>Não há registros de entrada ou saída</h2>
            </Records>
            <Options>
                <Link to="/entry">
                    <NewEntry>
                            <img scr={More} />
                            <h3>Nova entrada</h3>
                    </NewEntry>
                </Link>
                <Link to="/exit">
                    <NewExit>
                            <img src={Less} />
                            <h3>Nova saída</h3>
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
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 25px;

    h2 {
        color: #868686;
        font-size: 20px;
        font-weight: 400;
        text-align: center;
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

    h3 {
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

    h3 {
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