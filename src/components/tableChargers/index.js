import React, { useMemo } from "react";
import { View, Text, FlatList, TouchableOpacity, ScrollView } from "react-native";
import { MaterialCommunityIcons, FontAwesome6 } from "@expo/vector-icons";
import { global } from "../../Styles/global";
import { styles } from "./styles";

// MOCK – troque pelos seus dados reais
const SESSOES = [
  {
    id: "1",
    data: "20/09/2025",
    local: "AP Brasil Compensa",
    usuario: "Fabio Lima",
    carregador: "Carregador 40kW - 1",
    energiaTop: "35,80 kWh",
    energiaBottom: "33% - 87%",
    valor: "R$ 0,00",
    veiculo: "",
    durTop: "00h 57min",
    durBottom: "11:35 - 12:32",
    recarga: "Finalizado",
  },
  {
    id: "2",
    data: "19/09/2025",
    local: "AP Brasil Compensa",
    usuario: "Fabio Lima",
    carregador: "Carregador 40kW - 1",
    energiaTop: "8,70 kWh",
    energiaBottom: "51% - 63%",
    valor: "R$ 0,00",
    veiculo: "",
    durTop: "00h 14min",
    durBottom: "10:23 - 10:38",
    recarga: "Finalizado",
  },
  {
    id: "3",
    data: "03/09/2025",
    local: "Solar Neo Energia | Ambiente TESTE",
    usuario: "eletromobilidade.solarneo@solarneo...",
    carregador: "DEB89FC2 - 1",
    energiaTop: "7,70 kWh",
    energiaBottom: "61% - 80%",
    valor: "R$ 0,00",
    veiculo: "",
    durTop: "00h 56min",
    durBottom: "11:36 - 12:32",
    recarga: "Finalizado",
  },
];

const COLS = [
  { key: "data", label: "Data", width: 120, icon: "calendar-blank" },
  { key: "local", label: "Local", width: 240, icon: "home-outline" },
  { key: "usuario", label: "Usuário", width: 220, icon: "account-circle-outline" },
  { key: "carregador", label: "Carregador", width: 220, icon: "ev-station" },
  { key: "energia", label: "Energia", width: 140, icon: "flash-outline" },
  { key: "valor", label: "Valor", width: 120, icon: "currency-brl" },
  { key: "veiculo", label: "Veículo", width: 140, icon: "car-outline" },
  { key: "duracao", label: "Duração", width: 160, icon: "timer-outline" },
  { key: "recarga", label: "Recargas", width: 160, icon: "check-circle-outline" },
];

export default function TableChargers({ data = SESSOES, onExport }) {
  const rows = useMemo(() => data, [data]);

  const HeaderCell = ({ icon, label, width }) => (
    <View style={[styles.headerCell, { width }]}>
      <View style={styles.headerCellInner}>
        <MaterialCommunityIcons
          name={icon}
          size={16}
          color={global.colors.gray_text}
          style={{ marginRight: 8 }}
        />
        <Text style={styles.headerText}>{label}</Text>
      </View>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.headerRow}>
      {COLS.map((c) => (
        <HeaderCell key={c.key} icon={c.icon} label={c.label} width={c.width} />
      ))}
      <View style={[styles.headerCell, { width: 120 }]}>
        <View style={styles.headerCellInner}>
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={16}
            color={global.colors.gray_text}
            style={{ marginRight: 8 }}
          />
          <Text style={styles.headerText}>Ações</Text>
        </View>
      </View>
    </View>
  );

  const renderItem = ({ item, index }) => (
    <View
      style={[
        styles.row,
        index % 2 === 1 && styles.rowZebra
      ]}
    >
      {/* Data */}
      <View style={{ width: COLS[0].width, paddingHorizontal: 12 }}>
        <Text style={styles.cellText}>{item.data}</Text>
      </View>

      {/* Local (com ícone de casinha) */}
      <View style={{ width: COLS[1].width, paddingHorizontal: 12, flexDirection: "row", alignItems: "center" }}>
        <MaterialCommunityIcons name="home-outline" size={16} color={global.colors.gray_text} style={{ marginRight: 8 }} />
        <Text style={styles.cellText}>{item.local}</Text>
      </View>

      {/* Usuário (com ícone) */}
      <View style={{ width: COLS[2].width, paddingHorizontal: 12, flexDirection: "row", alignItems: "center" }}>
        <MaterialCommunityIcons name="account-circle-outline" size={16} color={global.colors.gray_text} style={{ marginRight: 8 }} />
        <Text style={styles.cellText}>{item.usuario}</Text>
      </View>

      {/* Carregador */}
      <View style={{ width: COLS[3].width, paddingHorizontal: 12 }}>
        <Text style={styles.cellText}>{item.carregador}</Text>
      </View>

      {/* Energia (duas linhas) */}
      <View style={{ width: COLS[4].width, paddingHorizontal: 12 }}>
        <Text style={styles.cellTextStrong}>{item.energiaTop}</Text>
        <Text style={styles.cellTextSub}>{item.energiaBottom}</Text>
      </View>

      {/* Valor */}
      <View style={{ width: COLS[5].width, paddingHorizontal: 12 }}>
        <Text style={styles.cellText}>{item.valor}</Text>
      </View>

      {/* Veículo */}
      <View style={{ width: COLS[6].width, paddingHorizontal: 12 }}>
        <Text style={styles.cellText}>{item.veiculo}</Text>
      </View>

      {/* Duração (duas linhas) */}
      <View style={{ width: COLS[7].width, paddingHorizontal: 12 }}>
        <Text style={styles.cellTextStrong}>{item.durTop}</Text>
        <Text style={styles.cellTextSub}>{item.durBottom}</Text>
      </View>

      {/* Recarga – pill “Finalizado” */}
      <View style={{ width: COLS[8].width, paddingHorizontal: 12 }}>
        <View style={styles.statusPill}>
          <Text style={styles.statusText}>{item.recarga}</Text>
        </View>
      </View>

      {/* Ações (2 ícones redondos como no print) */}
      <View style={{ width: 120, paddingHorizontal: 12, flexDirection: "row", gap: 12 }}>
        <TouchableOpacity activeOpacity={0.8} style={styles.actionBtn}>
          <MaterialCommunityIcons name="magnify" size={16} color={global.colors.gray_text} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={styles.actionBtn}>
          <MaterialCommunityIcons name="file-document-outline" size={16} color={global.colors.gray_text} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.wrapper}>
      {/* Top bar com botão à esquerda */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={onExport} activeOpacity={0.9} style={styles.csvBtn}>
          <Text style={styles.csvText}>Exportar CSV</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View>
            {renderHeader()}
            <FlatList
              data={rows}
              keyExtractor={(it) => it.id}
              renderItem={renderItem}
              ItemSeparatorComponent={() => <View style={styles.divider} />}
            />
          </View>
        </ScrollView>

        {/* Footer (paginador) */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Registros por página</Text>
          <View style={styles.selectLike}>
            <Text style={styles.selectLikeText}>10 ▾</Text>
          </View>
          <View style={{ flex: 1 }} />
          <Text style={styles.footerText}>1 de 1</Text>
          <View style={styles.footerIconBtn}><FontAwesome6 name="angles-left" size={12} color={global.colors.gray_text} /></View>
          <View style={styles.footerIconBtn}><FontAwesome6 name="angle-left" size={12} color={global.colors.gray_text} /></View>
          <View style={[styles.footerIconBtn, styles.footerIconBtnActive]}><Text style={styles.footerText}>●</Text></View>
          <View style={styles.footerIconBtn}><FontAwesome6 name="angle-right" size={12} color={global.colors.gray_text} /></View>
          <View style={styles.footerIconBtn}><FontAwesome6 name="angles-right" size={12} color={global.colors.gray_text} /></View>
        </View>
      </View>
    </View>
  );
}
