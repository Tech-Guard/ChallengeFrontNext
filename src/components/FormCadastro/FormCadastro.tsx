"use client";
import Link from 'next/link';
import styled from "styled-components";
import { useState } from "react";
import { useRouter } from "next/navigation";


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
        margin-bottom: 10px;
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
        height: 620px;
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


const Message = styled.div`
    width: 63%;
    display: block;
    margin: 0 auto;
    padding: 10px;
    border-radius: 5px;
    color: white;

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

const SuccessMessage = styled(Message)`
    background-color: green; 
`;

const ErrorMessage = styled(Message)`
    background-color: red;
`;




export default function FormCadastro(){

    const navigate = useRouter();

    const [email, setEmail] = useState('');
    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [message, setMessage] = useState(null);
    const [isSuccess, setIsSuccess] = useState(false);

    const toggleMostrarSenha = () => {
        setMostrarSenha(!mostrarSenha);
    };

    const handleRegister = async () => {
        const cliente = {
            nome,
            telefone,
            cpf,
            email,
            senha,
            id
        };

        try {
            const response = await fetch("http://localhost:8080/techguard/cliente", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(cliente)
            });

            console.log('Response status:', response.status);

            if (response.ok) {
                setMessage("Cadastro realizado com sucesso!");
                setIsSuccess(true);
    
                setNome('');
                setTelefone('');
                setCpf('');
                setEmail('');
                setSenha('');
                setId('');

                setTimeout(()=>{
                    navigate.push('/');
                }, 1500);
            } else {
                const errorMessage = await response.text();
                setMessage(errorMessage || "Erro ao realizar cadastro.");
                setIsSuccess(false);
            }
    
        } catch (error) {
            setMessage("Erro na requisição: " + error.message);
            setIsSuccess(false);
        }
    };

    return(
        <Main>
            <h1>Bem-Vindo</h1>
            <ButtonsDiv>
                <BtnLogin href="/login">Login</BtnLogin>
                <BtnCadastro href="/">Cadastrar</BtnCadastro>
            </ButtonsDiv>

            <form onSubmit={(e) => e.preventDefault()}>
                <InputMaior
                    type="email"
                    name="email"
                    placeholder="Endereço de email"
                    maxLength={200}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    
                />
                <div className="input-coluna2">
                    <Input
                    type="text"
                    name="nome"
                    placeholder="Nome e Sobrenome"
                    value={nome}
                    maxLength={100}
                    onChange={(e) => setNome(e.target.value)}
                    
                    />
                    <Input
                    type="tel"
                    name="telefone"
                    placeholder="Telefone"
                    maxLength={20}
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    
                    />
                </div>
                <div className="input-coluna2">
                    <Input
                    type='text'
                    name="cpf"
                    placeholder="CPF"
                    maxLength={11}
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    
                    />
                    <Input
                    type={mostrarSenha ? "text" : "password"}
                    name="senha"
                    placeholder="Senha"
                    maxLength={50}
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    
                    />
                </div>

                <MostrarSenha onClick={toggleMostrarSenha}>
                    <Bolinha className={mostrarSenha ? "mostrar" : ""}/>
                    {mostrarSenha ? "Esconder senha" : "Mostrar senha"}
                </MostrarSenha>

                <Registrar type="submit" onClick={handleRegister}>Registrar</Registrar>
            </form>
            <p>
            Já tem uma conta? <Entrar href="/login">Entrar</Entrar>
            </p>
            {message && (isSuccess ? (
                <SuccessMessage>{message}</SuccessMessage>
            ) : (
                <ErrorMessage>{message}</ErrorMessage>
            ))}
        </Main>
    )
}