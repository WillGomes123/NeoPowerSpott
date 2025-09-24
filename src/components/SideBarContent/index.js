import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { LinearGradient } from "expo-linear-gradient";
import {
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome6,
  Feather,
} from "@expo/vector-icons";

import { global } from "../../Styles/global";

// Ícones das rotas
const ICONS = {
  Resumo: "lightning-bolt",
  Monitoramento: "monitor-dashboard",
  Performance: "chart-line",
  Cupons: "ticket-confirmation-outline",
};

export default function SideBarContent(props) {
  const { state, navigation } = props;
  const activeIndex = state.index;

  // Acordeão “Seus Locais”
  const [open, setOpen] = useState(true);
  const [query, setQuery] = useState("");

  // Se quiser controlar a ordem, use o array abaixo em vez de state.routes
  const orderedRoutes = ["Resumo", "Monitoramento", "Performance", "Cupons"];
  const routes = orderedRoutes
    .map((name) => state.routes.find((r) => r.name === name))
    .filter(Boolean);

  // Itens mockados – troque pela sua fonte real
  const locais = [
    "AP Brasil Compensa",
    "CONDOMINIO_GIRASSOL_40K",
    "Solar Neo Energia | Ambiente TESTE",
  ].filter((x) => x.toLowerCase().includes(query.toLowerCase()));

  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.scrollContainer}
    >
      {/* Cabeçalho pequeno */}
      <View style={styles.brandRow}>
        <MaterialCommunityIcons
          name="lightning-bolt-circle"
          size={48}
          color={global.colors.green_dark}
        />
        <Text style={styles.brandText}>NeoPower</Text>
      </View>

      {/* Menu principal */}
      <View style={styles.menu}>
        {routes.map((route, index) => {
          const focused = activeIndex === state.routes.indexOf(route);
          const name = route.name;

          return (
            <Pressable
              key={name}
              onPress={() => navigation.navigate(name)}
              style={[styles.item, focused && styles.itemActive]}
            >
              {/* Indicador à esquerda quando ativo */}
              <View style={styles.indicatorWrap}>
                {focused && (
                  <LinearGradient
                    colors={["#2AF598", "#08AEEA"]} // verde -> azul
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={styles.indicator}
                  />
                )}
              </View>

              <MaterialCommunityIcons
                name={ICONS[name] || "circle-outline"}
                size={18}
                color={focused ? "#2a2a2a" : "#8d96a0"}
                style={styles.icon}
              />
              <Text style={[styles.label, focused && styles.labelActive]}>
                {name}
              </Text>
            </Pressable>
          );
        })}
      </View>

      {/* Seção “Seus Locais” */}
      <View style={styles.section}>
        <Pressable style={styles.sectionHeader} onPress={() => setOpen(!open)}>
          <View style={styles.sectionTitleRow}>
            <FontAwesome6 name="house" size={16} color="#8d96a0" />
            <Text style={styles.sectionTitle}>Seus Locais</Text>
          </View>
          <Feather
            name={open ? "chevron-up" : "chevron-down"}
            size={18}
            color="#8d96a0"
          />
        </Pressable>

        {open && (
          <View style={styles.sectionBody}>
            {/* Botão pílula “Adicionar local” */}
            <TouchableOpacity
              style={styles.addBtn}
              onPress={() => {
                // ação ao tocar
              }}
            >
              <Text style={styles.addBtnText}>Adicionar local</Text>
              <AntDesign name="pluscircleo" size={16} color="#2a2a2a" />
            </TouchableOpacity>

            {/* Busca */}
            <View style={styles.searchRow}>
              <TextInput
                value={query}
                onChangeText={setQuery}
                placeholder="Digite o nome do local..."
                placeholderTextColor="#9aa3ab"
                style={styles.searchInput}
              />
              <FontAwesome6
                name="magnifying-glass"
                size={16}
                color="#8d96a0"
                style={styles.searchIcon}
              />
            </View>

            {/* Lista de locais */}
            <ScrollView style={{ maxHeight: 220 }} bounces={false}>
              {locais.map((nome) => (
                <Pressable key={nome} style={styles.localItem}>
                  <Text style={styles.localText} numberOfLines={1}>
                    {nome}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        )}
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    backgroundColor: "#e9e9e9", // tom claro como no print
  },
  brandRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    marginTop:24,
    paddingBottom:20
    
  },
  brandText: {
    fontSize: 40,
    color: global.colors.gray_text,
    fontWeight: "600",
  },

  menu: { gap: 6, marginBottom: 16 },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingRight: 10,
    borderRadius: 8,
    overflow: "hidden",
  },
  itemActive: { backgroundColor: "rgba(8,174,234,0.08)" },
  indicatorWrap: {
    width: 8,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  indicator: { width: 3, height: "80%", borderRadius: 8 },
  icon: { marginHorizontal: 10 },
  label: { fontSize: 15, color: "#8d96a0", fontWeight: "500" },
  labelActive: { color: "#2a2a2a" },

  section: { marginTop: 4 },
  sectionHeader: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sectionTitleRow: { flexDirection: "row", alignItems: "center", gap: 10 },
  sectionTitle: { color: "#6f7a83", fontWeight: "600" },

  sectionBody: { gap: 10, paddingHorizontal: 4 },

  addBtn: {
    height: 38,
    borderRadius: 19,
    borderWidth: 1,
    borderColor: "#cfd6db",
    backgroundColor: "#F7F9F8",
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addBtnText: { color: "#2a2a2a", fontWeight: "600" },

  searchRow: {
    position: "relative",
    height: 38,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#cfd6db",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
  },
  searchInput: {
    paddingLeft: 12,
    paddingRight: 34,
    fontSize: 14,
    color: "#2a2a2a",
  },
  searchIcon: { position: "absolute", right: 10 },

  localItem: { paddingVertical: 8, paddingHorizontal: 6 },
  localText: { color: "#6f7a83", fontSize: 14 },
});
