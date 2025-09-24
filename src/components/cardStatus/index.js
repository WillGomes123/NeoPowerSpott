import React from "react";
import { Text, View, Image } from "react-native";
import { styles } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { global } from "../../Styles/global";

export default function CardStatus({ nome, source, numberValue }) {
  return (
    <View style={styles.container}>
        
      {/* Topo com título + imagem */}
      <View style={styles.viewAbove}>
        <View style={styles.titleWrap}>
          <Text numberOfLines={2} style={styles.textName}>
            {nome}
          </Text>
        </View>

        {/* Imagem no canto direito, sem distorção */}
        {!!source && (
          <Image
            source={source}
            style={styles.image}
            resizeMode="contain"
            accessible
            accessibilityLabel={typeof nome === "string" ? nome : "ilustração"}
          />
        )}
      </View>

      {/* Linha em degradê */}
      <LinearGradient
        colors={[global.colors.green, global.colors.green_dark, global.colors.blue]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.lineGradient}
      />

      {/* Número/valor */}
      <Text style={styles.textNumber}>{numberValue}</Text>
    </View>
  );
}
