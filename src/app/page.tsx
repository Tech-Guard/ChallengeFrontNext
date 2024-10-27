"use client";

import BannerMain from "../components/BannerMain/BannerMain";
import AtendimentoMain from "../components/AtendimentoMain/AtendimentoMain";
import CentrosAutomotivos from "../components/CentrosAutomotivos/CentrosAutomotivos";
import FaqMain from "../components/FaqMain/FaqMain";
import IntegrantesMain from "../components/IntegrantesMain/IntegrantesMain";
import Footer from "../components/Footer/Footer";


export default function Home() {
  return (
    <>
      <BannerMain/>
      <AtendimentoMain />
      <CentrosAutomotivos />
      <FaqMain />
      <IntegrantesMain />
      <Footer />
    </>
  );
}