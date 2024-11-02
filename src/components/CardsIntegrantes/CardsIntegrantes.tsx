"use client";
import styled from "styled-components";

const IntegrantesDiv = styled.div`
  display: inline-block;
  text-align: center;
  margin: 0px 10px;
  margin-bottom: 80px;
  background-color: #d3d3d3;
  width: calc(33% - 20px);
  height: 340px;
  border-radius: 20px;
  border: 1px solid #696969;
  cursor: pointer;

  h2 {
    text-align: left;
    padding: 6px 30px;
  }

  p {
    text-align: left;
    padding: 0px 30px;
    font-size: 20px;
  }

  a img {
    display: flex;
    width: 40px;
    margin: -50px 30px;
    float: right;
  }

  @media only screen and (max-width: 1440px) {
    width: calc(33% - 21px);
    height: 305px;

    h2 {
      padding: 8px 14px;
      font-size: 20px;
    }

    p {
      padding: 0px 14px;
      font-size: 16px;
    }

    a img {
      width: 34px;
      margin: -55px 20px;
    }
  }

  @media only screen and (max-width: 834px) {
    margin: 0px 9px;
    height: 240px;

    h2 {
      padding: 8px 10px;
      font-size: 18px;
    }

    p {
      padding: 0px 10px;
      font-size: 12px;
    }

    a img {
      width: 30px;
      margin: -48px 8px;
    }
  }

  @media only screen and (max-width: 680px) {
    width: 70%;
    height: 180px;
    border-radius: 40px;
    margin-bottom: 10px;

    h2 {
      padding-top: 34px;
      font-size: 22px;
      text-align: center;
    }

    p {
      text-align: center;
      font-size: 16px;
    }

    a img {
      display: inline;
      width: 40px;
      margin: 10px 20px;
    }
  }

  @media only screen and (max-width: 480px) {
    width: 90%;
    h2 {
      padding-top: 24px;
    }
  }

  @media only screen and (max-width: 400px) {
    h2 {
      padding-top: 20px;
    }
  }
`;

const ImgIntegrantes = styled.img`
  width: 90%;
  height: 70%;
  border-radius: 18px;
  border: 1px solid #696969;
  margin: 0px auto;
  margin-top: 14px;
  object-fit: cover;

  @media only screen and (max-width: 680px) {
    width: 46%;
    float: left;
    margin: 10px 0px 10px 10px;
    border-radius: 36px;
    height: 90%;
  }
`;
export default function CardsIntegrantes(props: {
  srcImg: string;
  altImg: string;
  nome: string;
  rm: string;
}) {
  return (
    <IntegrantesDiv>
      <ImgIntegrantes src={props.srcImg} alt={props.altImg} />
      <h2>{props.nome}</h2>
      <p>{props.rm}</p>
      <a
        href="https://github.com/Tech-Guard/ChallengeFrontNext"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/assets/img/iconGithub.png" alt="Icone do Github" loading="lazy"/>
      </a>
    </IntegrantesDiv>
  );
}
