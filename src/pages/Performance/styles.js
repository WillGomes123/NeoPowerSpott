import { StyleSheet } from "react-native";
import { global } from "../../Styles/global";

/**
 * Somente chaves já comuns do seu global.js:
 * green, white, white_border, gray, gray_regular, gray_text, cor_preto, blue_deep
 */
export const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: global.colors.white, paddingHorizontal: 16, paddingTop: 8 },

  /* Topo */
  topRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 8 },
  title: { color: global.colors.cor_preto, fontSize: 18, fontWeight: "700" },

  dateRight: { flexDirection: "row", alignItems: "center", gap: 16 },
  thisMonth: { color: global.colors.cor_preto, fontWeight: "700" },
  dateGroup: { flexDirection: "row", gap: 10 },
  dateBox: {
    height: 40,
    width: 150,
    borderRadius: 8,
    backgroundColor: global.colors.white,
    borderWidth: 1,
    borderColor: global.colors.white_border,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  dateText: { color: global.colors.gray_text, fontSize: 13 },

  /* Layout principal */
  mainRow: { flexDirection: "row", gap: 16, marginTop: 8 },

  /* Gráfico */
  chartCard: {
    flex: 1,
    height: 400,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: global.colors.white_border,
    backgroundColor: global.colors.white,
    padding: 14,
    position: "relative",
  },
  chartXAxis: {
    position: "absolute",
    left: 14,
    right: 14,
    bottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  axisLabel: { color: global.colors.gray_text, fontSize: 11 },

  /* Coluna direita */
  cardsCol: { width: 520 },

  headersRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    gap: 8,
  },
  hSmall: { color: global.colors.gray_text, fontSize: 12, fontWeight: "700" },
  hPill: {
    backgroundColor: global.colors.gray,
    color: global.colors.cor_preto,
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    paddingVertical: 8,
    borderRadius: 8,
  },

  cardRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: global.colors.white,
    borderWidth: 1,
    borderColor: global.colors.white_border,
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 56,
    marginBottom: 10,
  },
  cardTitleWrap: { flex: 1, flexDirection: "row", alignItems: "center" },
  cardTitle: { color: global.colors.cor_preto, fontWeight: "700", fontSize: 14 },
  cardUnit: { color: global.colors.gray_text, fontSize: 12, fontWeight: "700" },
  cardValue: { color: global.colors.cor_preto, fontWeight: "700" },
  cardValueGreen: { color: global.colors.green, fontWeight: "700" },
  cardRight: { flexDirection: "row", alignItems: "center", justifyContent: "flex-end", gap: 8 },

  arrowBtn: {
    width: 28,
    height: 28,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: global.colors.white_border,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: global.colors.white,
  },
});
