"use client";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: 105px;
  padding: 0px 30px;
  background-color: #ffffff;
  width: 100%;

  @media only screen and (max-width: 1440px) {
    height: 95px;
    padding: 0px 10px;
  }

  @media only screen and (max-width: 834px) {
    height: 95px;
    padding: 0px 10px;
  }

  @media only screen and (max-width: 680px) {
    height: 85px;
    padding: 0px 20px;
  }

  @media only screen and (max-width: 480px) {
    height: 70px;
    padding: 0px 20px;
  }

  @media only screen and (max-width: 400px) {
    height: 70px;
    padding: 0px 20px;
  }
`;

const LogoHeader = styled.div`
  img {
    width: 90px;
    padding-top: 10px;
    margin-left: 30px;

    @media only screen and (max-width: 1440px) {
      width: 80px;
    }

    @media only screen and (max-width: 680px) {
      width: 68px;
    }

    @media only screen and (max-width: 480px) {
      width: 50px;
    }

    @media only screen and (max-width: 400px) {
      width: 50px;
    }
  }
`;

const MenuIcon = styled.div`
  height: 36px;
  display: none;
  position: absolute;
  right: 10px;

  @media only screen and (max-width: 834px) {
    display: block;

    img {
      height: 28px;

      @media only screen and (max-width: 480px) {
        height: 24px;
      }
    }
  }
`;

const Nav = styled.nav<{ $isMenuOpen: boolean }>`
  ul {
    list-style-type: none;
    display: flex;

    @media only screen and (max-width: 834px) {
      display: ${({ $isMenuOpen }) => ($isMenuOpen ? "block" : "none")};
      position: absolute;
      top: 84px;
      right: 10px;
      width: 230px;
      height: 250px;
      background-color: #ffffff;
      border-radius: 10px;
      box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.4);
      padding: 0px 10px;
      list-style-type: none;
      text-align: center;
      flex-direction: column;
    }
  }

  ul li a {
    text-decoration: none;
    color: black;
    font-weight: lighter;
    display: inline;
    margin-right: 40px;
    font-size: 22px;
    transition: color 0.3s ease !important;
    cursor: pointer;

    &:hover {
      color: #054a77;
    }

    @media only screen and (max-width: 1440px) {
      margin-right: 36px;
      font-size: 20px;
    }

    @media only screen and (max-width: 1120px) {
      margin-right: 26px;
      font-size: 18px;
    }

    @media only screen and (max-width: 834px) {
      display: block;
      padding: 12px 0px;
      margin: 0 auto;
      text-decoration: none;
    }
  }
`;

const AtendimentoButton = styled.button`
  font-size: 18px !important;
  background-color: #3498db;
  font-weight: bold !important;
  color: #ffffff !important;
  padding: 14px 16px;
  border-radius: 10px;
  transition: background-color 0.3s ease !important;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #054a77;
  }

  @media only screen and (max-width: 1440px) {
    font-size: 16px;
    padding: 12px 14px;
  }
`;

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer id="headerMain">
      <LogoHeader>
        <img src="/assets/img/logoHeader.png" alt="Imagem do logo Tech Guard" />
      </LogoHeader>

      <MenuIcon onClick={toggleMenu}>
        <img src="/assets/img/iconMenu.png" alt="Imagem de 3 linhas, menu" />
      </MenuIcon>

      <Nav $isMenuOpen={isMenuOpen}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <ScrollLink
              to="centrosAutomotivos-main"
              smooth={true}
              duration={500}
            >
              Localização
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="faq-main" smooth={true} duration={500}>
              FAQ
            </ScrollLink>
          </li>
          <li>
            <Link href="/login">Entrar</Link>
          </li>
          <li>
            <ScrollLink
              to="atendimento-main"
              smooth={true}
              duration={500}
              component={AtendimentoButton}
            >
              ATENDIMENTO
            </ScrollLink>
          </li>
        </ul>
      </Nav>
    </HeaderContainer>
  );
}
