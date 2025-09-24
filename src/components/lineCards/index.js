// src/screens/ResumoTopCards/index.js
import React from "react";
import { View } from "react-native";
import CardStatus from "../../components/cardStatus";

// se você tem SVG transformer:
// import Connector from "../../images/connector.svg";
// import Porco from "../../images/porco.svg";
// import Consumo from "../../images/consumo.svg";
// import Posto from "../../images/posto.svg";
// import Transaction from "../../images/transaction.svg";

export default function LineCards() {
  return (
    <View style={{ flex: 1, backgroundColor: "#F4F6F6", paddingHorizontal: 12, paddingTop: 8 }}>
      <View style={{ flexDirection: "row", flexWrap: "wrap", alignItems: "flex-start" }}>
        <CardStatus
          nome="Status dos Carregadores"
          numberValue="2"
          source={require("../../images/posto.svg")} // ou SvgComponent={Posto}
        />
        <CardStatus
          nome="Faturamento"
          numberValue="R$ 0,00"
          source={require("../../images/porco.svg")} // ou SvgComponent={Porco}
        />
        <CardStatus
          nome="Consumo de Energia"
          numberValue="52,20 kWh"
          source={require("../../images/consumo.svg")} // ou SvgComponent={Consumo}
        />
        <CardStatus
          nome="Clientes Atendidos"
          numberValue="2"
          source={require("../../images/connector.svg")} // ou SvgComponent={Connector}
        />
        <CardStatus
          nome="Transações Total"
          numberValue="3"
          source={require("../../images/transaction.svg")} // ou SvgComponent={Transaction}
        />
      </View>
    </View>
  );
}
