"use client";
import PerguntasFaq from "../PerguntasFaq/PerguntasFaq";
import styled from "styled-components";

const FaqSection = styled.section`
  margin: 90px 180px;

  h1 {
    font-size: 40px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  @media only screen and (max-width: 1440px) {
    margin: 8% 6%;
    h1 {
      font-size: 34px;
    }
    img {
      width: 26px;
    }
  }

  @media only screen and (max-width: 834px) {
    margin: 6% 4%;
    h1 {
      font-size: 32px;
    }
  }

  @media only screen and (max-width: 680px) {
    h1 {
      font-size: 28px;
    }
    img {
      width: 24px;
    }
  }

  @media only screen and (max-width: 480px) {
    h1 {
      font-size: 26px;
    }
  }

  @media only screen and (max-width: 400px) {
    h1 {
      font-size: 22px;
      text-align: center;
    }
    img {
      width: 22px;
    }
  }
`;

const IconFaq = styled.img`
  width: 30px;
  margin-right: 16px;
`;

export default function FaqMain() {
  const listaFaq = [
    {
      pergunta: "Como posso fazer login?",
      resposta:
        'No canto superior direito da página inicial, clique no botão "Login" e insira seu email e senha nos campos correspondentes.',
    },
    {
      pergunta: "Como fazer para interagir com o assistente virtual?",
      resposta:
        "Vá para a seção de ATENDIMENTO e digite sua pergunta sobre o problema do seu veículo no campo fornecido.",
    },
    {
      pergunta: "Como recebo um orçamento para o reparo do meu veículo?",
      resposta:
        "Após o assistente virtual diagnosticar o problema, eleapresentará um orçamento detalhado com os custos estimados do reparo.",
    },
    {
      pergunta: "Quais são os benefícios do seguro Tech Guard?",
      resposta:
        "O seguro Tech Guard oferece benefícios como diagnósticos remotos, orçamentos online, e acesso a uma rede de centros automotivos confiáveis.",
    },
    {
      pergunta: "Como posso encontrar os centros automotivos recomendados?",
      resposta:
        "Após aceitar o orçamento, você receberá uma lista dos centros automotivos mais bem avaliados próximos à sua localização para realizar o reparo.",
    },
  ];

  return (
    <FaqSection>
      <h1>
        <IconFaq
          src="/assets/img/iconFAQ.png"
          alt="Icone de um ponto de interrogação"
        />
        Perguntas Frequentes
      </h1>

      {listaFaq.map((faq, index) => (
        <PerguntasFaq
          key={index}
          pergunta={faq.pergunta}
          resposta={faq.resposta}
        />
      ))}
    </FaqSection>
  );
}
