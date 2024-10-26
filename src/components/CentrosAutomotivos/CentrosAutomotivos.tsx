import styled from "styled-components";


const MecanicasSection = styled.section`
  margin: 90px 180px;

  h1{
    font-size: 40px;
    margin-bottom: 26px;
  }

  input{
    font-size: 20px;
    color: #777777;
    width: 360px;
    border: 1px solid #777777;
    padding: 10px 10px;

    position: absolute;
    top: 1380px;
    left: 39%;
  }

  iframe{
    width: 100%;
    height: 400px;
    border-radius: 30px;
    border: none;
  }


  @media only screen and (max-width: 1440px) {
    margin: 8% 6%;
    
    h1 {
      font-size: 34px;
    }

    input {
      top: 1300px;
      left: 35%;
    }
  }

  @media only screen and (max-width: 1120px) {
    input {
      top: 1240px;
      left: 34%;
    }
  }

  @media only screen and (max-width: 834px) {
    margin: 6% 4%;
    
    h1 {
      font-size: 32px;
    }

    input {
      font-size: 18px;
      width: 300px;
      top: 1100px;
      left: 26%;
    }
  }

  @media only screen and (max-width: 680px) {
    h1 {
      font-size: 28px;
    }

    input {
      font-size: 16px;
      width: 260px;
      top: 1040px;
      left: 26%;
    }
  }

  @media only screen and (max-width: 480px) {
    h1 {
      font-size: 26px;
    }

    input {
      left: 20%;
    }
  }

  @media only screen and (max-width: 400px) {
    h1 {
      font-size: 26px;
      text-align: center;
    }

    input {
      left: 15%;
      top: 148%;
    }
  }

  @media only screen and (max-width: 380px) {
    input {
      left: 14%;
      top: 150%;
    }
  }

  @media only screen and (max-width: 360px) {
    input {
      left: 14%;
      top: 160%;
    }
  }

  @media only screen and (max-width: 320px) {
    input {
      left: 10%;
      top: 226%;
    }
  }
`;

const IconMecanicas = styled.img`
  width: 30px;
  margin-right: 16px;
  margin-top: 0;

  @media only screen and (max-width: 680px) {
    width: 26px;
  }

  @media only screen and (max-width: 400px) {
    width: 22px;
  }
`;

export default function CentrosAutomotivos(){
    return(
        <MecanicasSection id="centrosAutomotivos-main">
          <h1>
            <IconMecanicas src="/assets/img/iconEngrenagem.png" alt="Ícone de uma engrenagem" />
            Centros Automotivos
          </h1>
          <input
            type="text"
            placeholder="Informe sua localização..."
          />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14412.643052178572!2d-46.64049568419688!3d-23.56722431319171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDU1JzQyLjYiUyA0NsKwNDAnMTkuNiJX!5e0!3m2!1spt-BR!2sbr!4v1649869107530!5m2!1spt-BR!2sbr"
          ></iframe>
        </MecanicasSection>
    )
}