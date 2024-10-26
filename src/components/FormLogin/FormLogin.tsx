import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
"use client";


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
    padding: 40px;

    h1{
        font-size: 28px;
    }

    label{
        display: block;
        padding-left: 260px;
        text-align: left;
        font-size: 24px;
        margin-top: 20px;
        margin-bottom: 4px;
        font-weight:normal;
    }

    p{
        text-align: left;
        padding-left: 260px;  
        margin-top: 10px;
    }

    @media only screen and (max-width: 1165px){
        max-width: 800px;

        label{
            padding-left: 140px;
        }

        p{
            padding-left: 130px;
        }
    }

    @media only screen and (max-width: 900px){
        max-width: 600px;

        label{
            padding-left: 60px;
        }

        p{
            padding-left: 50px;
        }
    }

    @media only screen and (max-width: 665px){
        max-width: 400px;
        margin-top: 30px;
        margin-bottom: 30px;

        label{
            padding-left: 16px;
        }

        p{
            padding-left: 10px;
        }
    }

    @media only screen and (max-width: 480px){
        max-width: 310px;
        padding: 40px 20px;

        h1{
            font-size: 24px;
        }

        label{
            padding-left: 6px;
            font-size: 22px;
        }

        p{
            padding-left: 0px;
            font-size: 14px;
        }
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
    padding-right: 3px;
    cursor: pointer;

    @media only screen and (max-width: 480px){
        max-width: 220px;
        height: 56px;
        margin-top: 20px;
        margin-bottom: 46px;
        padding-left: 5px;
    }
`;

const BtnEntrar = styled.a`
    color: #FFFFFF;
    text-decoration: none;
    font-size: 26px;
    font-weight: bold;
    background-color: #3498DB;
    border-radius: 20px;
    padding: 10px 30px;
    cursor: pointer;
    transition: background-color 0.3s ease-in;

    &:hover{
        background-color: #054a77;
    }

    @media only screen and (max-width: 480px){
        font-size: 22px;
        padding: 10px 16px;
        border-radius: 16px;
    }
`;

const BtnCadastro = styled(Link)`
    color: #CDCDCD;
    text-decoration: none;
    font-size: 26px;
    margin: 0px 5px;
    cursor: pointer;
    transition: color 0.3s ease-in;

    &:hover{
        color: #969696;
    }

    @media only screen and (max-width: 480px){
        font-size: 20px;
        margin: 0px 20px;
    }
`;

interface BolinhaProps {
    mostrarSenha: boolean;
}

const Bolinha = styled.span<BolinhaProps>`
    display: inline-block;
    width: 14px;
    height: 14px;
    color: #FFFFFF;
    border-radius: 50%;
    border: 1px solid #333;
    margin-right: 5px;
    margin-top: 8px;
    cursor: pointer;
    background-color: ${(props) => (props.mostrarSenha ? "black" : "white")};

    @media only screen and (max-width: 480px){
        width: 12px;
        height: 12px;
    }
`;

const MostrarSenha = styled.span`
    display: block;
    text-decoration: none;
    color: black;
    text-align: left;
    padding-left: 260px;  
    margin-bottom: 40px;  
    cursor: pointer;

    @media only screen and (max-width: 1165px){
        padding-left: 130px;  
    }

    @media only screen and (max-width: 900px){
        padding-left: 50px;  
    }

    @media only screen and (max-width: 665px){
        padding-left: 10px;  
    }

    @media only screen and (max-width: 480px){
        padding-left: 6px;
        font-size: 14px;
    }
`;

const Input = styled.input`
    display: block;
    margin: 0 auto;
    width: 50%;
    height: 48px;
    border-radius: 6px;
    border: 1px solid #CECCCC;
    font-size: 18px;
    padding-left: 20px;

    &:hover{
        color: #b3b3b3;
    }

    @media only screen and (max-width: 1165px){
        width: 66%; 
    }

    @media only screen and (max-width: 900px){
        width: 84%;  
    }

    @media only screen and (max-width: 665px){
        width: 100%;  
    }

    @media only screen and (max-width: 480px){
        font-size: 16px;
        padding-left: 14px;
    }
`;

const Button = styled.button`
    display: block;
    margin: 0 auto;
    width: 50%;
    height: 48px;
    border-radius: 6px;
    background-color: #3498DB;
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
        width: 66%; 
    }
    @media only screen and (max-width: 900px){
        width: 84%;  
    }

    @media only screen and (max-width: 665px){
        width: 100%;  
    }
`;

const Cadastrar = styled(Link)`
    text-decoration: none;
    color: #0057FF;
    cursor: pointer;
    transition: color .3s ease-in;

    &:hover{
        color: #00246d;
    }
`;


export default function FormLogin(){

    const [mostrarSenha, setMostrarSenha] = useState(false);

    const toggleMostrarSenha = () => {
        setMostrarSenha(!mostrarSenha);
    };

    return(
        <Main>
            <h1>Bem-Vindo</h1>

            <ButtonsDiv>
                <BtnEntrar href="#">Login</BtnEntrar>
                <BtnCadastro to="/cadastro">Cadastrar</BtnCadastro>
            </ButtonsDiv>

            <form id="entrarForm">
                <label>Login</label>
                <Input
                    type="email"
                    name="emailLogin"
                    id="emailLogin"
                    placeholder="Endereço de email"
                />

                <label>Senha</label>
                <Input
                    type={mostrarSenha ? "text" : "password"}
                    name="senhaLogin"
                    id="senhaLogin"
                    placeholder="Senha"
                />
                <MostrarSenha onClick={toggleMostrarSenha}>
                    <Bolinha mostrarSenha={mostrarSenha} />
                    {mostrarSenha ? "Esconder senha" : "Mostrar senha"}
                </MostrarSenha>

                <Button type="button" className="btnEntrar">Entrar</Button>
            </form>
            <p>
            Não tem uma conta?
            <Cadastrar to="/cadastro">Cadastrar</Cadastrar>
            </p>
        </Main>
    )
}