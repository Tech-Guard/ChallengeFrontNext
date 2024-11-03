"use client";
import styled from "styled-components";
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

  return (
    <AtendimentoSection id="atendimento-main">
      <h1>
        <IconIA src="/assets/img/iconAI.png" alt="Icone de lapis" /> Converse
        com a nossa IA
      </h1>
      <p>Faça o diagnóstico e o orçamento do seu carro totalmente online.</p>
      <InputContainer>
        <input
          type="text"
          placeholder="Gostaria de fazer o diagnóstico do meu carro..."
        />
        <LupaInput src="/assets/img/iconLupa.png" alt="Imagem de uma lupa" />
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
