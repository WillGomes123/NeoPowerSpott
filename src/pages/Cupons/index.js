import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import Header from "../../components/Header";
import { styles } from "./styles";
import { global } from "../../Styles/global";

export default function Cupons() {
  return (
    <View style={styles.page}>
      <Header />

      <View style={styles.content}>
        {/* Lateral esquerda */}
        <View style={styles.sidebar}>
          <Text style={styles.sidebarTitle}>Cupons</Text>
          <Text style={styles.sidebarDesc}>
            Crie cupons de desconto{"\n"}para os seus clientes.
          </Text>

          <TouchableOpacity activeOpacity={0.9} style={styles.newCouponBtn}>
            <Text style={styles.newCouponText}>Novo cupom</Text>
            <MaterialCommunityIcons
              name="plus-circle-outline"
              size={18}
              color={global.colors.white}
            />
          </TouchableOpacity>
        </View>

        {/* Conteúdo principal */}
        <View style={styles.main}>
          {/* Abas */}
          <View style={styles.tabs}>
            <View style={[styles.tab, styles.tabActive]}>
              <Text style={[styles.tabText, styles.tabTextActive]}>Ativos</Text>
            </View>
            <View style={[styles.tab, styles.tabMuted]}>
              <Text style={styles.tabText}>Agendados</Text>
            </View>
            <View style={[styles.tab, styles.tabMuted]}>
              <Text style={styles.tabText}>Inativos</Text>
            </View>
          </View>

          {/* Filtros / Busca */}
          <View style={styles.filters}>
            <View style={styles.selectBox}>
              <Text style={styles.selectText}>Todos</Text>
              <MaterialCommunityIcons
                name="chevron-down"
                size={18}
                color={global.colors.gray_text}
              />
            </View>

            <View style={{ flex: 1 }} />

            <View style={styles.searchBox}>
              <Text style={styles.searchPlaceholder}>Pesquisar</Text>
              <Feather
                name="search"
                size={16}
                color={global.colors.gray_text}
              />
            </View>
          </View>

          {/* Card de cupom */}
          <View style={styles.card}>
            {/* Coluna esquerda (nome e descrição) */}
            <View style={styles.cardLeft}>
              <Text style={styles.cardTitle}>Teste Cupom</Text>
              <Text style={styles.cardSubtitle}>Cupom de Desconto: 100%</Text>

              <View style={styles.cardMetaRow}>
                <Text style={styles.cardMetaLabel}>
                  Início: 17 de setembro de 2025 às 19:01
                </Text>
              </View>
              <View style={styles.cardMetaRow}>
                <Text style={styles.cardMetaLabel}>Término: Nunca expira</Text>
              </View>
            </View>

            {/* Coluna direita (código e ações) */}
            <View style={styles.cardRight}>
              <Text style={styles.couponCode}>FABIOLINDO</Text>

              <View style={styles.actionsRow}>
                <TouchableOpacity style={styles.iconBtn}>
                  <Feather
                    name="copy"
                    size={18}
                    color={global.colors.gray_text}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconBtn}>
                  <Feather
                    name="edit-2"
                    size={18}
                    color={global.colors.gray_text}
                  />
                </TouchableOpacity>
              </View>

              <TouchableOpacity>
                <Text style={styles.linkUses}>0 Utilizações</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Paginação */}
          <View style={styles.pagination}>
            <View style={styles.pagNav}>
              <MaterialCommunityIcons
                name="chevron-left"
                size={18}
                color={global.colors.gray_text}
              />
              <Text style={styles.pagText}>Anterior</Text>
            </View>

            <View style={styles.pagCurrent}>
              <Text style={styles.pagCurrentText}>1</Text>
            </View>

            <View style={styles.pagNav}>
              <Text style={styles.pagText}>Próxima</Text>
              <MaterialCommunityIcons
                name="chevron-right"
                size={18}
                color={global.colors.gray_text}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
