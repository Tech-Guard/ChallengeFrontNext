import CardsIntegrantes from "../CardsIntegrantes/CardsIntegrantes"
import styled from "styled-components";



const IntegrantesSection = styled.section`
    margin: 90px 180px;

    h1{
        font-size: 40px;
        margin-bottom: 20px;
    }

    h1{
        font-size: 40px;
        margin-bottom: 20px;
    }

    @media only screen and (max-width: 1440px) {
        margin: 8% 6%;
        h1 {
            font-size: 34px;
        }
    }


    @media only screen and (max-width: 834px) {
        margin: 6% 4%;
        
        h1 {
            font-size: 32px;
        }
    }

    @media only screen and (max-width: 680px) {
        text-align: center;

        h1 {
            text-align: left;
            font-size: 28px;
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
    }
`;

const IconIntegrantes = styled.img`
    width: 30px;
    height: 30px;
    margin-right: 16px;
    margin-top: 70px;
`;

export default function IntegrantesMain(){

    const listaIntegrantes = [
        {srcImg:"/assets/img/imgJulio.jpg", altImg:"Foto do Julio César", nome:"Julio César", rm:"RM554466 - 1TDSPO"},
        {srcImg:"/assets/img/imgBrenno.jpg", altImg:"Foto do Brenno Cauet", nome:"Brenno Cauet", rm:"RM557334 - 1TDSPO"},
        {srcImg:"/assets/img/imgKP.jpg", altImg:"Foto do Kaique Pintor", nome:"Kaique Pintor", rm:"RM558124 - 1TDSPO"},
    ]

    return(
        <IntegrantesSection>
            <h1><IconIntegrantes src="/assets/img/iconGrupo.png" alt="Icone de 3 pessoas" />Integrantes</h1>

            {listaIntegrantes.map((integrante)=>(
                <CardsIntegrantes srcImg={integrante.srcImg} altImg={integrante.altImg} nome={integrante.nome} rm={integrante.rm}/>
            ))}
            
        </IntegrantesSection>
    )
}