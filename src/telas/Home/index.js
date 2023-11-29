import React from "react";
import Topo from "./componentes/Topo";
import Pordutores from "./componentes/Produtores";

export default function Home() {
  return <Pordutores topo={Topo} />;
}
