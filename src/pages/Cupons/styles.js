import { StyleSheet } from "react-native";
import { global } from "../../Styles/global";

/**
 * Somente chaves já comuns do seu global.js:
 * green, white, white_border, gray, gray_regular, gray_text, cor_preto, blue_deep
 */
export const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: global.colors.white,
  },

  content: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingTop: 8,
  },

  /* -------- Sidebar -------- */
  sidebar: {
    width: 220,
    paddingVertical: 12,
    paddingRight: 16,
  },
  sidebarTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: global.colors.cor_preto,
    marginBottom: 8,
  },
  sidebarDesc: {
    color: global.colors.gray_text,
    fontSize: 13,
    lineHeight: 18,
    marginBottom: 16,
  },
  newCouponBtn: {
    height: 40,
    borderRadius: 22,
    backgroundColor: global.colors.green,
    paddingHorizontal: 16,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: 170,
  },
  newCouponText: {
    color: global.colors.white,
    fontWeight: "700",
    fontSize: 14,
  },

  /* -------- Main -------- */
  main: {
    flex: 1,
    backgroundColor: global.colors.gray_regular,
    borderRadius: 12,
    padding: 18,
  },

  /* Abas */
  tabs: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 16,
  },
  tab: {
    height: 52,
    paddingHorizontal: 32,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  tabActive: {
    backgroundColor: global.colors.white,
    borderWidth: 1,
    borderColor: global.colors.white_border,
  },
  tabMuted: {
    backgroundColor: "#E9EAEA",
  },
  tabText: {
    color: global.colors.gray_text,
    fontWeight: "600",
  },
  tabTextActive: {
    color: global.colors.cor_preto,
  },

  /* Filtros */
  filters: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 12,
  },
  selectBox: {
    width: 260,
    height: 40,
    borderRadius: 8,
    backgroundColor: global.colors.white,
    borderWidth: 1,
    borderColor: global.colors.white_border,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  selectText: {
    color: global.colors.gray_text,
    fontSize: 13,
  },
  searchBox: {
    width: 300,
    height: 40,
    borderRadius: 22,
    backgroundColor: global.colors.white,
    borderWidth: 1,
    borderColor: global.colors.white_border,
    paddingHorizontal: 14,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  searchPlaceholder: {
    color: global.colors.gray_text,
    fontSize: 13,
  },

  /* Card do cupom */
  card: {
    backgroundColor: "#F4F4F5",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: global.colors.white_border,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 22,
  },
  cardLeft: {
    flex: 1,
    paddingRight: 12,
  },
  cardTitle: {
    color: global.colors.cor_preto,
    fontWeight: "700",
    fontSize: 14,
    marginBottom: 6,
  },
  cardSubtitle: {
    color: global.colors.cor_preto,
    fontSize: 13,
    marginBottom: 10,
  },
  cardMetaRow: {
    paddingVertical: 6,
    borderTopWidth: 1,
    borderTopColor: global.colors.white_border,
  },
  cardMetaLabel: {
    color: global.colors.gray_text,
    fontSize: 12,
  },

  cardRight: {
    minWidth: 220,
    alignItems: "flex-end",
    gap: 10,
  },
  couponCode: {
    color: global.colors.blue_deep,
    fontWeight: "800",
    letterSpacing: 0.4,
  },
  actionsRow: {
    flexDirection: "row",
    gap: 10,
  },
  iconBtn: {
    width: 34,
    height: 34,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: global.colors.white_border,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: global.colors.white,
  },
  linkUses: {
    color: global.colors.blue_deep,
    textDecorationLine: "underline",
    fontSize: 12,
  },

  /* Paginação */
  pagination: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 18,
    marginTop: 24,
    marginBottom: 6,
  },
  pagNav: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  pagText: {
    color: global.colors.gray_text,
    fontSize: 13,
  },
  pagCurrent: {
    width: 40,
    height: 40,
    borderRadius: 10,
    backgroundColor: "#1E1E1E",
    alignItems: "center",
    justifyContent: "center",
  },
  pagCurrentText: {
    color: global.colors.white,
    fontWeight: "700",
  },
});
