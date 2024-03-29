import Image from "next/image";
import { Hero } from "./components/Hero";
import { Sobre } from "./sections/Sobre";
import { Unidades } from "./sections/Unidades";
import { Funcionarios } from "./sections/Funcionarios";
import { Servicos } from "./sections/Servicos";
import { Depoimentos } from "./sections/Depoimentos";
import { Contato } from "./sections/Contato";
import { BottomMenu } from "./components/BottomMenu";

export default function Home() {
  return (
    <>
      <Hero />
      <Sobre />
      <Unidades />
      <Funcionarios />
      <Servicos />
      <Depoimentos />
      <Contato />
      <BottomMenu />
    </>
  );
}
