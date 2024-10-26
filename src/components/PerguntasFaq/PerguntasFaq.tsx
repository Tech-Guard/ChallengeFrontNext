"use client"; 
import styled from "styled-components";
import { useState } from "react";

const PerguntaFaq = styled.h2`
    font-size: 20px;
    font-weight: normal;
    padding: 8px 0px;
    cursor: pointer;

    @media only screen and (max-width: 680px) {
        font-size: 16px;
    }
`;

const Divisao = styled.hr<{ isOpen: boolean }>`
    margin: 6px 0px 12px;
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const RespostaFaq = styled.p<{ isOpen: boolean }>`
    color: #4d4d4d;
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};

    @media only screen and (max-width: 680px) {
        font-size: 14px;
    }
`;

const ContainerFaq = styled.div`
    ul li{
      list-style-type: none;
      width: 100%;
      background-color:#eeeeee;
      padding: 10px 30px;
      margin: 12px 0px;
      border-radius: 5px
    }

    @media only screen and (max-width: 834px) {
        ul li {
            padding: 12px 30px;
            margin: 10px 0px;
        }
    }

    @media only screen and (max-width: 680px) {
        ul li {
            padding: 10px 20px;
            margin: 10px 0px;
        }
    }
`;

export default function PerguntasFaq(props:{pergunta:string, resposta:string}){

    const [isOpen, setIsOpen] = useState(false);

    const toggleResposta = () => {
        setIsOpen(!isOpen);
      };

    return(
      <ContainerFaq id="faq-main">
        <ul>
          <li>
            <PerguntaFaq onClick={toggleResposta}>{props.pergunta}</PerguntaFaq>
            <Divisao isOpen={isOpen}/>
            <RespostaFaq isOpen={isOpen}>{props.resposta}</RespostaFaq>
          </li>
        </ul>
      </ContainerFaq>
    )
}