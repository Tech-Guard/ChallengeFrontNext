
import styled from "styled-components";
import { Link as ScrollLink } from 'react-scroll';
import Link from "next/link";



const FooterContainer = styled.footer`
  text-align: center;
  background-color: #081f2e;
  width: 100%;
  color: #ffffff;
  font-size: 18px;

  @media only screen and (max-width: 1440px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 834px) {
    margin-top: 120px;
    font-size: 14px;
  }

  @media only screen and (max-width: 680px) {
    margin-top: 120px;
    font-size: 12px;
  }

  @media only screen and (max-width: 480px) {
    margin-top: 120px;
    font-size: 12px;
  }

  @media only screen and (max-width: 400px) {
    margin-top: 120px;
    font-size: 10px;
  }
`;

const Nav = styled.nav`
  ul li {
    display: inline-block;
    height: 60px;
    padding: 20px 100px;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 1440px){
      padding: 20px 30px;
    }

    @media only screen and (max-width: 834px){
      padding: 20px 20px;
    }

    @media only screen and (max-width: 680px){
      padding: 20px 12px;
    }
  }

  ul li a, Link {
    color: #ffffff;
    text-decoration: none;
    font-size: 18px;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    @media only screen and (max-width: 834px) {
      font-size: 16px;
    }

    @media only screen and (max-width: 680px) {
      font-size: 14px;
    }

    @media only screen and (max-width: 480px) {
      font-size: 12px;
    }

    @media only screen and (max-width: 400px) {
      font-size: 8px;
    }
  }

`;

const TextoFooter = styled.p`
  height: 120px;
  padding: 30px 120px;

  @media only screen and (max-width: 1440px){
    font-size: 16px;
    height: 120px;
    padding: 26px 40px;
  }

  @media only screen and (max-width: 834px) {
    padding: 20px 20px;
  }

  @media only screen and (max-width: 680px) {
    padding: 20px 16px;
    font-size: 14px;
  }

  @media only screen and (max-width: 480px) {
    padding: 20px 16px;
    font-size: 12px;
  }
`;

const Divisao = styled.hr`
  border: none;
  height: 1px;
  background-color: #ffffff;
`;

const CopyrightDiv = styled.div`
  background-color: #071620;
  height: 60px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: #ffffff;
    text-decoration: none;
    padding-left: 10px;

    &:hover {
      text-decoration: underline; 
    }
  }
`;

export default function Footer(){
    return(
        <FooterContainer>
          <Nav>
              <ul>
                  <li><ScrollLink to="headerMain" smooth={true} duration={500}>Entrar</ScrollLink></li>
                  <li><ScrollLink to="centrosAutomotivos-main" smooth={true} duration={500}>Localização</ScrollLink></li>
                  <li><ScrollLink to="faq-main" smooth={true} duration={500}>FAQ</ScrollLink></li>
                  <li><Link href="/login">ENTRAR</Link></li>
                  <li>
                    <ScrollLink to="atendimento-main" smooth={true} duration={500}>ATENDIMENTO</ScrollLink>
                  </li>
              </ul>
          </Nav>
  
          <Divisao/>
  
          <TextoFooter>
              A Tech Guard é uma empresa líder em soluções de seguros
              automotivos, proporcionando diagnósticos precisos e orçamentos
              transparentes através de nossa plataforma inovadora. Nosso
              compromisso é oferecer aos clientes uma experiência conveniente e
              confiável, com foco na segurança e qualidade dos serviços
              prestados.
          </TextoFooter>
  
          <CopyrightDiv>
              © 2024 Copyright: <a href="#">Tech Guard</a>
          </CopyrightDiv>
      </FooterContainer>
    )
}