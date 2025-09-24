import { StyleSheet } from "react-native";
import { global } from "../../Styles/global";

/**
 * Atenção: este styles.js usa APENAS chaves de cor que existem no seu global.js:
 * - green, white, white_border, gray_text, gray, blue_deep, cor_preto, gray_regular
 */
export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: global.colors.white, // fundo da página
    padding: 12,
  },

  topBar: {
    width: "100%",
    alignItems: "flex-start",
    marginBottom: 12,
  },
  csvBtn: {
    backgroundColor: global.colors.green,
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 26,
    shadowColor: global.colors.cor_preto,
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  csvText: {
    color: global.colors.white,
    fontWeight: "700",
    letterSpacing: 0.2,
  },

  container: {
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: global.colors.white_border,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: global.colors.gray, // cinza bem claro do header
    height: 44,
  },
  headerCell: {
    justifyContent: "center",
  },
  headerCellInner: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
  },
  headerText: {
    color: global.colors.cor_preto,
    fontWeight: "700",
    fontSize: 13,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: global.colors.white,
    minHeight: 56,
  },
  rowZebra: {
    backgroundColor: "#FCFCFC",
  },

  divider: {
    height: 1,
    backgroundColor: global.colors.white_border,
  },

  cellText: {
    color: global.colors.cor_preto,
    fontSize: 13,
  },
  cellTextStrong: {
    color: global.colors.cor_preto,
    fontSize: 13,
    fontWeight: "700",
    lineHeight: 16,
  },
  cellTextSub: {
    color: global.colors.gray_text,
    fontSize: 12,
    marginTop: 2,
  },

  statusPill: {
    alignSelf: "flex-start",
    backgroundColor: global.colors.gray, // fundo claro como no print
    paddingHorizontal: 16,
    height: 36,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: global.colors.white_border,
    justifyContent: "center",
  },
  statusText: {
    color: global.colors.cor_preto,
    fontWeight: "700",
    fontSize: 13,
  },

  actionBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: global.colors.white_border,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: global.colors.white,
  },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    height: 48,
    backgroundColor: global.colors.white,
  },
  footerText: {
    color: global.colors.gray_text,
    fontSize: 12,
    marginHorizontal: 8,
  },
  selectLike: {
    paddingHorizontal: 10,
    height: 28,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: global.colors.white_border,
    justifyContent: "center",
    backgroundColor: global.colors.white,
  },
  selectLikeText: {
    fontSize: 12,
    color: global.colors.cor_preto,
  },
  footerIconBtn: {
    width: 28,
    height: 28,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: global.colors.white_border,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 6,
    backgroundColor: global.colors.white,
  },
  footerIconBtnActive: {
    backgroundColor: global.colors.blue_deep,
    borderColor: global.colors.blue_deep,
  },
});
