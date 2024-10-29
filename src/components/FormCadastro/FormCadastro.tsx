"use client";
import Link from 'next/link';
import styled from "styled-components";
import { useState } from "react";


const Main = styled.main`
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    text-align: center;

    background-color: #E9E9E9;
    max-width: 1100px;
    height: 600px;
    margin-top: 80px;
    border-radius: 60px;
    padding: 40px 140px;

    h1{
        font-size: 28px;
    }

    p{
        text-align: left;
        padding-left: 160px;  
        margin-top: 10px;
    }

    @media only screen and (max-width: 1165px){
        max-width: 800px;

        p{
            padding-left: 20px; 
        }
    }

    @media only screen and (max-width: 900px){
        max-width: 640px;
        padding: 40px 40px;
    }
    
    @media only screen and (max-width: 665px){
        max-width: 440px;
        padding: 40px 20px;
        margin-top: 30px;
        margin-bottom: 30px;

        h1{
            font-size: 24px;
        }
    }

    
    @media only screen and (max-width: 480px){
        max-width: 310px;
        padding: 40px 0px;
    }
`;

const ButtonsDiv = styled.div`
    margin: 0 auto;
    background-color: #FFFFFF;
    max-width: 278px;
    height: 61px;
    border-radius: 20px;
    padding-top: 15px;
    margin-top: 30px;
    margin-bottom: 30px;
    cursor: pointer;

    @media only screen and (max-width: 665px){
        max-width: 260px;
        height: 56px;
        margin-top: 20px;
        margin-bottom: 46px;
    }
`;

const BtnLogin = styled(Link)`
    color: #CDCDCD;
    text-decoration: none;
    font-size: 26px;
    margin: 0px 12px;
    cursor: pointer;
    transition: color 0.3s ease-in;

    &:hover{
        color: #969696;
    }

    @media only screen and (max-width: 665px){
        font-size: 22px;
        padding: 10px 8px;
    }

    @media only screen and (max-width: 480px){
        padding: 10px 8px;
    }
`;

const BtnCadastro = styled(Link)`
    color: #FFFFFF;
    text-decoration: none;
    font-size: 26px;
    font-weight: bold;
    background-color: #3498DB;
    border-radius: 20px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease-in;
    margin-left: 14px;

    &:hover{
        background-color: #054a77;
    }

    @media only screen and (max-width: 665px){
        font-size: 22px;
        margin: 0px 0px;
        border-radius: 16px;
    }

    @media only screen and (max-width: 480px){
        font-size: 20px;
        margin-left: 10px;
    }
`;


const Input = styled.input`
    margin: 0 auto;
    width: 30%;
    height: 48px;
    border-radius: 6px;
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
    border: 1px solid #CECCCC;
    font-size: 18px;
    padding-left: 20px;

    @media only screen and (max-width: 1165px){
        width: 45%;
    }

    @media only screen and (max-width: 665px){
        margin-left: 4px;
        font-size: 16px;
        padding-left: 10px;
        margin-right: 4px;
    }

    @media only screen and (max-width: 480px){
        width: 43%;
        padding-left: 5px;
    }
`;

const InputMaior = styled.input`
    margin: 0 auto;
    width: 63%;
    height: 48px;
    border-radius: 6px;
    margin-top: 20px;
    margin-left: 10px;
    margin-right: 10px;
    border: 1px solid #CECCCC;
    font-size: 18px;
    padding-left: 20px;

    @media only screen and (max-width: 1165px){
        width: 95%;
    }

    @media only screen and (max-width: 665px){
        width: 93%;
    }

    @media only screen and (max-width: 480px){
        width: 90%;
    }
`;

const MostrarSenha = styled.span`
    display: block;
    text-decoration: none;
    color: black;
    text-align: left;
    padding-left: 430px;  
    margin-bottom: 30px;  
    margin-top: 8px;  
    cursor: pointer;

    @media only screen and (max-width: 1165px){
        padding-left: 270px; 
    }

    @media only screen and (max-width: 900px){
        padding-left: 300px;
    }

    @media only screen and (max-width: 665px){
        padding-left: 220px;  
        font-size: 14px;
    }

    @media only screen and (max-width: 480px){
        padding-left: 170px;  
    }
`;

const Registrar = styled.button`
    background-color: #3498DB;
    display: block;
    margin: 0 auto;
    width: 63%;
    height: 48px;
    border-radius: 6px;
    border: none;
    font-size: 24px;
    font-weight: bold;
    color: #FFFFFF;
    cursor: pointer;
    transition: background-color .3s ease-in;

    &:hover{
        background-color: #054a77;
    }

    @media only screen and (max-width: 1165px){
        width: 95%;
    }

    @media only screen and (max-width: 665px){
        width: 93%;
        font-size: 20px;
    }

    @media only screen and (max-width: 480px){
        width: 90%;
    }
`;

const Entrar = styled(Link)`
    text-decoration: none;
    color: #0057FF;
    cursor: pointer;
    transition: color .3s ease-in;

    &:hover{
        color: #00246d;
    }
`;


interface BolinhaProps {
    mostrarSenha: boolean;
}

const Bolinha = styled.span`
    display: inline-block;
    width: 14px;
    height: 14px;
    color: #FFFFFF;
    border-radius: 50%;
    border: 1px solid #333;
    margin-right: 5px;
    cursor: pointer;
    background-color: ${(props) => (props.className === "mostrar" ? "black" : "white")};

    @media only screen and (max-width: 665px){
        width: 12px;
        height: 12px;
    }
`;





export default function FormCadastro(){

    const [mostrarSenha, setMostrarSenha] = useState(false);

    const toggleMostrarSenha = () => {
        setMostrarSenha(!mostrarSenha);
    };

    return(
        <Main>
            <h1>Bem-Vindo</h1>
            <ButtonsDiv>
                <BtnLogin href="/login">Login</BtnLogin>
                <BtnCadastro href="/">Cadastrar</BtnCadastro>
            </ButtonsDiv>

            <form>
                <InputMaior
                    type="email"
                    name="emailCadastro"
                    placeholder="Endereço de email"
                />
                <div className="input-coluna2">
                    <Input
                    type="text"
                    name="nomeCadastro"
                    placeholder="Nome e Sobrenome"
                    />
                    <Input
                    type="tel"
                    name="telCadastro"
                    placeholder="Telefone"
                    />
                </div>
                <div className="input-coluna2">
                    <Input
                    type="number"
                    name="cpfCadastro"
                    placeholder="CPF"
                    />
                    <Input
                    type={mostrarSenha ? "text" : "password"}
                    name="senhaCadastro"
                    placeholder="Senha"
                    />
                </div>

                <MostrarSenha onClick={toggleMostrarSenha}>
                    <Bolinha className={mostrarSenha ? "mostrar" : ""}/>
                    {mostrarSenha ? "Esconder senha" : "Mostrar senha"}
                </MostrarSenha>

                <Registrar type="button">Registrar</Registrar>
            </form>
            <p>
            Já tem uma conta? <Entrar href="/login">Entrar</Entrar>
            </p>
        </Main>
    )
}