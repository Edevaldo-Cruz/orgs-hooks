import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

import { carregaTopo, carregaProdutores } from "../../../servicos/carregaDados";
import logo from "../../../assets/logo.png";

class Topo extends React.Component {
  state = {
    topo: {
      boasVindas: "",
      legenda: "",
    },
  };

  atualizaTopo() {
    const retorno = carregaTopo();
    this.setState({ topo: retorno });
  }

  /*O método `componentDidMount` é uma parte do ciclo de vida de 
    um componente React e React Native⁵. Ele é chamado uma vez, 
    imediatamente após o componente ser renderizado pela primeira vez.
    */
  componentDidMount() {
    this.atualizaTopo();
  }
  render() {
    return (
      <View style={estilos.topo}>
        <Image source={logo} style={estilos.imagem} />
        <Text style={estilos.boasVindas}>{this.state.topo.boasVindas}</Text>
        <Text style={estilos.legenda}>{this.state.topo.legenda}</Text>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  topo: {
    backgroundColor: "#F6F6F6",
    padding: 16,
    paddingTop: 55,
  },
  imagem: {
    width: 70,
    height: 28,
  },
  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
    color: "#464646",
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
    color: "#A3A3A3",
  },
});

export default Topo;
