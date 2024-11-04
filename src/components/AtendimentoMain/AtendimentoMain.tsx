"use client";
import styled from "styled-components";
import React, { useState } from "react";
import CardsProblemas from "../CardsProblemas/CardsProblemas";

const AtendimentoSection = styled.section`
  margin: 90px 180px;

  h1 {
    font-size: 40px;
    display: flex;
    align-items: center;
  }

  p {
    font-size: 22px;
    margin-bottom: 10px;
  }

  @media only screen and (max-width: 1440px) {
    margin: 8% 6%;

    h1 {
      font-size: 34px;
    }

    p {
      font-size: 20px;
      margin-top: 10px;
    }
  }

  @media only screen and (max-width: 834px) {
    margin: 6% 4%;

    h1 {
      font-size: 32px;
      margin-top: 60px;
    }

    p {
      font-size: 20px;
    }
  }

  @media only screen and (max-width: 680px) {
    h1 {
      font-size: 28px;
      margin-top: 50px;
    }

    p {
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 480px) {
    h1 {
      font-size: 26px;
    }

    p {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 400px) {
    h1 {
      font-size: 22px;
      text-align: center;
    }

    p {
      font-size: 14px;
      text-align: center;
    }
  }
`;

const ChatContainer = styled.div`
  width: 100%;
  margin: 30px 0px 0px 0px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  background-color: #f9f9f9;
  overflow-y: auto;
  height: 70%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

interface MessageProps {
  sender: "user" | "bot"; 
}

const Message = styled.div<MessageProps>`
  align-self: ${({ sender }) => (sender === "user" ? "flex-end" : "flex-start")};
  max-width: 100%;
  padding: 10px;
  border-radius: 10px;
  background-color: ${({ sender }) => (sender === "user" ? "#d1e7ff" : "#e9ecef")};
`;

const IconIA = styled.img`
  width: 30px;
  margin-right: 10px;

  @media only screen and (max-width: 680px) {
    width: 24px;
  }

  @media only screen and (max-width: 400px) {
    width: 22px;
  }
`;

const InputContainer = styled.div`
  display: inline-block;
  height: 64px;
  border: 3px solid black;
  border-radius: 50px;
  width: 100%;
  padding: 10px 40px;
  margin: 60px 0px;
  position: relative;

  input {
    font-size: 24px;
    color: #777777;
    border: none;
    outline: none;
    width: 94%;
    padding-top: 6px;
  }

  @media only screen and (max-width: 1440px) {
    height: 60px;
    margin: 40px 0px;

    input {
      font-size: 22px;
      padding-top: 5px;
    }
  }

  @media only screen and (max-width: 834px) {
    height: 56px;
    margin: 30px 0px;

    input {
      font-size: 20px;
      width: 90%;
    }
  }

  @media only screen and (max-width: 680px) {
    height: 50px;

    input {
      font-size: 16px;
      width: 90%;
    }
  }

  @media only screen and (max-width: 400px) {
    padding: 10px 20px;
  }
`;

const LupaInput = styled.img`
  cursor: pointer;
  width: 36px;
  float: right;

  @media only screen and (max-width: 680px) {
    width: 28px;
  }
`;

const ProblemasText = styled.p`
  font-weight: bold;
  margin-top: 8px;
`;

export default function AtendimentoMain() {
  const listaProblemas = [
    {
      titulo: "Pneus",
      altImg: "Imagem de vários pneus",
      srcImg: "/assets/img/pneus.jpg",
    },
    {
      titulo: "Suspensão",
      altImg: "Imagem de um homem arrumando a suspensão de um carro",
      srcImg: "/assets/img/suspensao.jpg",
    },
    {
      titulo: "Direção",
      altImg: "Imagem de uma pessoa dirigindo",
      srcImg: "/assets/img/direcao.jpg",
    },
  ];


  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const apiWatson = async (message) => {
    const apikey = "tOiXPfrVzxsK4gRJXqtZO9OwKL207PQa97OzpZCPWyQx";
    const url = "https://api.au-syd.assistant.watson.cloud.ibm.com/v1/workspaces/f6c8b0ba-541e-46de-b9bd-dacdec87ed6c/message?version=2020-04-01";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa("apikey:" + apikey)}`,
      },
      body: JSON.stringify({
        input: { text: message },
      }),
    });

    if (!response.ok) throw new Error("Erro na comunicação com a API");
    const data = await response.json();
    return data.output.generic[0].text;
  };

  const sendMessage = async () => {
    if (!input.trim()) return; 
    const userMessage = { text: input, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]); 
    const currentInput = input; 
    setInput("");

    try {
      const botResponse = await apiWatson(currentInput); 
      const botMessage = { text: botResponse, sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, botMessage]); 
    } catch (error) {
      console.error("Erro ao obter a resposta do bot:", error);
      setMessages((prevMessages) => [...prevMessages, { text: "Erro ao se comunicar com o bot.", sender: "bot" }]);
    }
  };

  return (
    <AtendimentoSection id="atendimento-main">
      <h1>
        <IconIA src="/assets/img/iconAI.png" alt="Icone de lapis" /> Converse
        com a nossa IA
      </h1>
      <p>Faça o diagnóstico e o orçamento do seu carro totalmente online.</p>

      <ChatContainer>
        {messages.map((msg, index) => (
          <Message key={index} sender={msg.sender}>
            {msg.text}
          </Message>
        ))}
      </ChatContainer>
      
      <InputContainer>
        <input
          type="text"
          placeholder="Gostaria de fazer o diagnóstico do meu carro..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <LupaInput src="/assets/img/iconLupa.png" alt="Imagem de uma lupa" onClick={sendMessage} role="button" aria-label="Enviar mensagem" />
      </InputContainer>

      <ProblemasText>*Possíveis problemas</ProblemasText>

      {listaProblemas.map((problema, index) => (
        <CardsProblemas
          key={index}
          titulo={problema.titulo}
          altImg={problema.altImg}
          srcImg={problema.srcImg}
        />
      ))}
    </AtendimentoSection>
  );
}
