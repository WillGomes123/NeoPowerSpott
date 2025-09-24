import { StyleSheet } from "react-native";
import { global } from "../../Styles/global";

export const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: global.colors.white },

  // barras superiores (abas)
  tabsBar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
    paddingHorizontal: 16,
    paddingTop: 6,
    backgroundColor: global.colors.gray_regular,
    height: 48,
  },
  tabItem: { flexDirection: "row", alignItems: "center", gap: 8, height: 44 },
  tabItemActive: { flexDirection: "row", alignItems: "center", gap: 8, height: 44, position: "relative" },
  tabText: { color: global.colors.gray_text, fontSize: 14 },
  tabUnderline: { position: "absolute", bottom: 0, left: 0, right: 0, height: 3, backgroundColor: global.colors.green, borderTopLeftRadius: 3, borderTopRightRadius: 3 },

  // seção 1 — tabela
  tableCard: {
    marginHorizontal: 16,
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: global.colors.white_border,
    backgroundColor: global.colors.white,
    overflow: "hidden",
  },
  thead: { flexDirection: "row", alignItems: "center", backgroundColor: global.colors.gray, height: 44 },
  th: { justifyContent: "center" },
  thText: { fontSize: 13, fontWeight: "700", color: global.colors.cor_preto },
  tbody: { backgroundColor: global.colors.white },
  tr: { flexDirection: "row", alignItems: "center", minHeight: 44, backgroundColor: global.colors.white },
  trZebra: { backgroundColor: "#FCFCFC" },
  td: { paddingVertical: 10, paddingHorizontal: 12 },
  tdText: { fontSize: 13, color: global.colors.cor_preto },
  dot: { width: 12, height: 12, borderRadius: 6 },
  statusPill: { alignSelf: "flex-start", paddingHorizontal: 14, height: 28, borderRadius: 30, borderWidth: 1, justifyContent: "center" },
  statusPillText: { fontSize: 12, fontWeight: "700" },
  histBtn: { alignSelf: "flex-start", paddingHorizontal: 14, height: 28, borderRadius: 30, borderWidth: 1, justifyContent: "center" },
  histBtnText: { fontSize: 12, fontWeight: "700" },

  footer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    height: 56,
    backgroundColor: global.colors.white,
    borderTopWidth: 1,
    borderTopColor: global.colors.white_border,
  },
  footerText: { color: global.colors.gray_text, fontSize: 12, marginHorizontal: 8 },
  selectLike: { paddingHorizontal: 10, height: 28, borderRadius: 6, borderWidth: 1, borderColor: global.colors.white_border, justifyContent: "center", backgroundColor: global.colors.white },
  selectLikeText: { fontSize: 12, color: global.colors.cor_preto },
  navBtn: { width: 28, height: 28, borderRadius: 6, borderWidth: 1, borderColor: global.colors.white_border, alignItems: "center", justifyContent: "center", marginLeft: 6, backgroundColor: global.colors.white },

  // seção 2 — mapa
  mapCard: {
    marginHorizontal: 16,
    marginTop: 18,
    marginBottom: 24,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: global.colors.white_border,
    backgroundColor: global.colors.white,
    overflow: "hidden",
  },
  tabsBarSecondary: { flexDirection: "row", gap: 10, padding: 12, backgroundColor: global.colors.gray_regular },
  tabItemSecondary: { backgroundColor: global.colors.white, borderWidth: 1, borderColor: global.colors.white_border, borderRadius: 6, height: 34, paddingHorizontal: 12, justifyContent: "center", alignItems: "center" },
  tabItemActiveSecondary: { backgroundColor: global.colors.white, borderWidth: 2, borderColor: global.colors.green, borderRadius: 6, height: 34, paddingHorizontal: 12, justifyContent: "center", alignItems: "center" },

  mapBox: {
    height: 520,
    margin: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: global.colors.white_border,
    backgroundColor: "#F3F5F7",
    overflow: "hidden",
    position: "relative",
  },
  pinNeutral: { position: "absolute", width: 40, height: 40, borderRadius: 20, backgroundColor: "#9E9E9E", alignItems: "center", justifyContent: "center", elevation: 2 },
  pinOk: { position: "absolute", width: 40, height: 40, borderRadius: 20, backgroundColor: global.colors.green, alignItems: "center", justifyContent: "center", elevation: 2 },
  pinOff: { position: "absolute", width: 40, height: 40, borderRadius: 20, backgroundColor: "#EB5757", alignItems: "center", justifyContent: "center", elevation: 2 },
});
