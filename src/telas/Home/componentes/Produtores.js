import React, { useEffect, useState } from "react";
import { FlatList, Text, StyleSheet } from "react-native";
//import { carregaProdutores } from "../../../servicos/carregaDados";
import Produtor from "./Produtor";
import useProdutores from "../../../hooks/useProdutores";

export default function Pordutores({ topo: Topo }) {
  const [titulo, lista] = useProdutores();

  //   const [titulo, setTitulo] = useState("");
  //   const [lista, setLista] = useState([]);

  //   useEffect(() => {
  //     const retorno = carregaProdutores();
  //     setTitulo(retorno.titulo);
  //     setLista(retorno.lista);
  //   }, []);

  const TopoLista = () => {
    return (
      <>
        <Topo />
        <Text style={estilos.titulo}>{titulo}</Text>
      </>
    );
  };

  return (
    <FlatList
      data={lista}
      renderItem={({ item }) => <Produtor {...item} />}
      keyExtractor={({ nome }) => nome}
      ListHeaderComponent={TopoLista}
    />
  );
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    fontWeight: "bold",
    color: "#464646",
  },
});
