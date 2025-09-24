import React, { useMemo } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "./styles";
import { global } from "../../Styles/global";
import Header from "../../components/Header";

// ====== MOCK – troque pelos seus dados reais ======
const ROWS = [
  { id:"1", local:"AP Brasil Compensa", cpcode:"18409-1", idCarregador:"9D7F883", nome:"Carregador 40kW", conexao:"online", status:"Disponível", ultimoStatus:"22/09/2025 às 18:27:09", disponibilidade:"98%" },
  { id:"2", local:"Solar Neo Energia | Ambiente TESTE", cpcode:"40628-1", idCarregador:"DEB89FC2", nome:"Carregador 40kW", conexao:"offline", status:"Offline", ultimoStatus:"03/09/2025 às 12:32:56", disponibilidade:"0%" },
];

const COLS = [
  { key:"local", label:"Localização", width:320, leftPad:16 },
  { key:"cpcode", label:"Cp–Code", width:140 },
  { key:"idCarregador", label:"ID carregador", width:170 },
  { key:"nome", label:"Nome carregador", width:220 },
  { key:"conexao", label:"Conexão", width:130 },
  { key:"status", label:"Status", width:170 },
  { key:"ultimo", label:"Último status", width:240 },
  { key:"hist", label:"Ver histórico", width:200 },
  { key:"disp", label:"Disponibilidade", width:160 },
];

export default function MonitoramentoEmSecoes() {
  const data = useMemo(() => ROWS, []);

  const HeaderCell = ({ label, width, leftPad = 12 }) => (
    <View style={[styles.th, { width }]}>
      <Text style={[styles.thText, { paddingLeft: leftPad }]}>{label}</Text>
    </View>
  );

  const Dot = ({ online }) => (
    <View
      style={[
        styles.dot,
        { backgroundColor: online ? global.colors.green : "#EB5757" },
      ]}
    />
  );

  const StatusPill = ({ status }) => {
    const ok = status === "Disponível";
    return (
      <View
        style={[
          styles.statusPill,
          { backgroundColor: ok ? "#C9F4A6" : "#FAD5D3", borderColor: ok ? "#B1EA8B" : "#F2C0BE" },
        ]}
      >
        <Text style={[styles.statusPillText, { color: ok ? "#2C7B1B" : "#9B2C2C" }]}>{status}</Text>
      </View>
    );
  };

  const HistButton = ({ danger }) => (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[
        styles.histBtn,
        { backgroundColor: danger ? "#FAD5D3" : global.colors.green, borderColor: danger ? "#F2C0BE" : global.colors.green },
      ]}
    >
      <Text style={[styles.histBtnText, { color: danger ? "#9B2C2C" : global.colors.white }]}>
        Ver histórico
      </Text>
    </TouchableOpacity>
  );

  const renderHeader = () => (
    <View style={styles.thead}>
      {COLS.map((c) => (
        <HeaderCell key={c.key} label={c.label} width={c.width} leftPad={c.leftPad} />
      ))}
    </View>
  );

  const renderRow = (item, idx) => {
    const online = item.conexao === "online";
    const ok = item.status === "Disponível";
    return (
      <View key={item.id} style={[styles.tr, idx % 2 === 1 && styles.trZebra]}>
        <View style={[styles.td, { width: COLS[0].width }]}><Text style={[styles.tdText, { paddingLeft: 16 }]}>{item.local}</Text></View>
        <View style={[styles.td, { width: COLS[1].width }]}><Text style={styles.tdText}>{item.cpcode}</Text></View>
        <View style={[styles.td, { width: COLS[2].width }]}><Text style={styles.tdText}>{item.idCarregador}</Text></View>
        <View style={[styles.td, { width: COLS[3].width }]}><Text style={styles.tdText}>{item.nome}</Text></View>
        <View style={[styles.td, { width: COLS[4].width, justifyContent: "center" }]}><Dot online={online} /></View>
        <View style={[styles.td, { width: COLS[5].width }]}><StatusPill status={item.status} /></View>
        <View style={[styles.td, { width: COLS[6].width }]}><Text style={styles.tdText}>{item.ultimoStatus}</Text></View>
        <View style={[styles.td, { width: COLS[7].width }]}><HistButton danger={!ok} /></View>
        <View style={[styles.td, { width: COLS[8].width, alignItems: "flex-end", paddingRight: 16 }]}><Text style={styles.tdText}>{item.disponibilidade}</Text></View>
      </View>
    );
  };

  return (
    <ScrollView style={styles.page} contentContainerStyle={{ paddingBottom: 24 }}> 
    <Header/>
      {/* A B A S  (visual) */}
      <View style={styles.tabsBar}>

        <View style={styles.tabItemActive}>
          <MaterialCommunityIcons name="ev-station" size={16} color={global.colors.gray_text} />
          <Text style={styles.tabText}>Carregadores</Text>
          <View style={styles.tabUnderline} />
        </View>
        <View style={styles.tabItem}>
          <MaterialCommunityIcons name="map-outline" size={16} color={global.colors.gray_text} />
          <Text style={styles.tabText}>Mapa da rede</Text>
        </View>
      </View>

      {/* ====== SEÇÃO 1: TABELA ====== */}
      <View style={styles.tableCard}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View>
            {renderHeader()}
            <View style={styles.tbody}>{data.map(renderRow)}</View>
          </View>
        </ScrollView>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Registros por página</Text>
          <View style={styles.selectLike}><Text style={styles.selectLikeText}>10 ▾</Text></View>
          <View style={{ flex: 1 }} />
          <Text style={styles.footerText}>1 de 1</Text>
          <TouchableOpacity style={styles.navBtn}><MaterialCommunityIcons name="chevron-left" size={18} color={global.colors.gray_text} /></TouchableOpacity>
          <TouchableOpacity style={styles.navBtn}><MaterialCommunityIcons name="chevron-right" size={18} color={global.colors.gray_text} /></TouchableOpacity>
        </View>
      </View>

      
    </ScrollView>
  );
}
