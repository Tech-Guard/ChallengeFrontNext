"use client";
import styled from "styled-components";
import { Link as ScrollLink } from 'react-scroll';

const BannerSection = styled.section`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  width: 100%;
  height: 400px;

  h1 {
    font-size: 44px;
    font-weight: bold;
  }

  p {
    font-size: 24px;
    margin-top: 10px;
    margin-bottom: 50px;
  }

  @media only screen and (max-width: 1440px) {
    height: 340px;

    h1 {
      font-size: 40px;
    }

    p {
      font-size: 24px;
      margin-bottom: 30px;
    }
  }

  @media only screen and (max-width: 1120px) {
    h1 {
      font-size: 36px;
    }

    p {
      font-size: 20px;
    }
  }

  @media only screen and (max-width: 834px) {
    height: 320px;

    h1 {
      font-size: 32px;
    }

    p {
      font-size: 18px;
      margin-bottom: 30px;
    }
  }

  @media only screen and (max-width: 680px) {
    h1 {
      font-size: 28px;
    }

    p {
      font-size: 16px;
      margin-bottom: 30px;
    }
  }

  @media only screen and (max-width: 480px) {
    h1 {
      font-size: 24px;
    }

    p {
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 400px) {
    h1 {
      font-size: 20px;
    }

    p {
      margin-bottom: 20px;
    }
  }
`;

const AssistenteButton = styled(ScrollLink)`
  background-color: #ffffff;
  font-size: 24px;
  color: #6fc0e8;
  padding: 8px 24px;
  border-radius: 8px;
  text-decoration: none;
  transition: color 0.3s ease, background-color 0.3s ease;
  cursor: pointer;
  border: none;
  display: inline-block;

  &:hover {
    color: #054a77;
    background-color: #f0f0f0;
  }

  @media only screen and (max-width: 1440px) {
    font-size: 22px;
    padding: 6px 20px;
  }

  @media only screen and (max-width: 680px) {
    font-size: 20px;
    padding: 6px 20px;
  }

  @media only screen and (max-width: 480px) {
    font-size: 18px;
    padding: 4px 16px;
  }
`;

const TextoBanner = styled.div`
  background-color: #6fc0e8;
  width: 50%;
  height: 100%;
  padding: 50px 80px;
  flex: 1;

  @media only screen and (max-width: 1440px) {
    padding: 30px 50px;
  }

  @media only screen and (max-width: 834px) {
    padding: 20px 30px;
  }

  @media only screen and (max-width: 680px) {
    padding: 20px 20px;
  }
`;

const ImgBanner = styled.div`
  width: 50%;
  height: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 400px;
    float: right;
    object-fit: cover;
  }

  @media only screen and (max-width: 834px) {
    img {
      height: 320px;
    }
  }

  @media only screen and (max-width: 480px) {
    img {
      height: 300px;
    }
  }
`;

export default function BannerMain() {
  return (
    <BannerSection>
      <TextoBanner>
        <h1>Diagnóstico inteligente para seu carro</h1>
        <p>
          Receba um diagnóstico e orçamento automáticos, além dos melhores
          centros automotivos ao seu alcance.
        </p>
        <AssistenteButton to="atendimento-main" smooth={true} duration={500}>
          Assistente
        </AssistenteButton>
      </TextoBanner>

      <ImgBanner>
        <img
          src="/assets/img/banner.jpg"
          alt="Imagem de um mecânico arrumando um carro"
        />
      </ImgBanner>
    </BannerSection>
  );
}
