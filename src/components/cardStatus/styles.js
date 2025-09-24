import { StyleSheet } from "react-native";
import { global } from "../../Styles/global";

const IMAGE_W = 110;   // largura reservada para a imagem
const IMAGE_H = 110;

export const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: global.colors.white,
    width: 350,
    height: 200,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: global.colors.white_border,
  },

  viewAbove: {
    flexDirection: "row",
    width: "100%",
    padding: 12,
    height: "70%",
    backgroundColor: global.colors.blue_deep, // mantido como no seu arquivo
    position: "relative",
  },

  // espaço de texto fica protegido pela margem à direita
  titleWrap: {
    flex: 1,
    paddingRight: IMAGE_W + 8, // reserva espaço para a imagem
  },

  textName: {
    color: global.colors.blue,
    fontSize: 24,
    fontWeight: "700",
  },

  // imagem posicionada no canto superior direito, sem distorcer
  image: {
    position: "absolute",
    right: 8,
    top: 6,
    width: IMAGE_W,
    height: IMAGE_H,
  },

  lineGradient: {
    height: 4,
    width: "100%",
  },

  textNumber: {
    color: global.colors.gray_text,
    fontSize: 32,
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
    paddingTop: 8,
  },
});
