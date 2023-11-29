import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Estrela from "./Estrela";

export default function Estrelas({
  quantidade: quantidadeAntiga,
  editavel = false,
  grande = false,
}) {
  const [quantidade, setQuantidade] = useState(quantidadeAntiga);
  const RenderEstrelas = () => {
    const listaEstrela = [];
    for (let i = 0; i < 5; i++) {
      listaEstrela.push(
        <Estrela
          key={i}
          onPress={() => (grande == true ? setQuantidade(i + 1) : null)}
          desabilitada={!editavel}
          preenchida={i < quantidade}
          grande={grande}
        />
      );
    }
    return listaEstrela;
  };

  return (
    <View style={estilos.estrelas}>
      <RenderEstrelas />
    </View>
  );
}

const estilos = StyleSheet.create({
  estrelas: {
    flexDirection: "row",
  },
});
