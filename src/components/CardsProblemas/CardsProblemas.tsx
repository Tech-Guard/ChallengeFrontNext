
import styled from "styled-components";


const ProblemasDiv = styled.div`
  display: inline-block;
  text-align: center;
  margin: 16px 10px;
  background-color: #d3d3d3;
  height: 230px;
  border-radius: 20px;
  border: 1px solid #696969;
  cursor: pointer;
  width: calc(33% - 20px);
  box-sizing: border-box;

  img {
    width: 90%;
    height: 160px;
    border-radius: 18px;
    border: 1px solid #696969;
    margin-top: 16px;
    object-fit: cover;
  }

  p {
    font-weight: bold;
    margin-top: 8px;
  }

  @media only screen and (max-width: 1440px) {
    height: 210px;
    width: calc(33% - 21px);

    img {
      height: 160px;
      border-radius: 16px;
      margin-top: 11px;
    }
  }

  @media only screen and (max-width: 834px) {
    height: 180px;
    width: calc(33% - 21px);


    img {
      height: 128px;
      margin-top: 9px;
      margin-bottom: -4px;
      border-radius:  16px;
    }
  }

  @media only screen and (max-width: 680px) {
    height: 146px;
    width: calc(33% - 20px);

    img {
      height: 104px;
      margin-top: 7px;
      margin-bottom: -8px;
    }
  }

  @media only screen and (max-width: 400px) {
    height: 126px;
    margin-top: 5px;

    img {
      height: 90px;
      margin-top: 5px;
    }
  }
`;

export default function CardsProblemas(props:{titulo:string, altImg:string, srcImg:string}){
    return(
            <ProblemasDiv>
              <img
                src={props.srcImg}
                alt={props.altImg}
              />
              <p>{props.titulo}</p>
            </ProblemasDiv>
    )
}