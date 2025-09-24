import React, { useMemo } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Svg, { Line as SvgLine, Polyline, Circle } from "react-native-svg";
import { styles } from "./styles";
import { global } from "../../Styles/global";
import Header from "../../components/Header";

/**
 * DADOS ESTÁTICOS (iguais ao print)
 * X: rótulos no eixo
 * Y: valores normalizados (0..1) para construir a polylinha
 * Observação: nos dias 02/09 e 19/09 temos pico (=1).
 */
const X_LABELS = ["01/09","04/09","07/09","10/09","13/09","16/09","19/09","22/09"];
const SERIES = [
  { x: "01/09", y: 0 },
  { x: "02/09", y: 1 }, // pico visual
  { x: "04/09", y: 0 },
  { x: "07/09", y: 0 },
  { x: "10/09", y: 0 },
  { x: "13/09", y: 0 },
  { x: "16/09", y: 0 },
  { x: "19/09", y: 1 }, // pico visual
  { x: "20/09", y: 1 },
  { x: "22/09", y: 0 },
];

const CHART = {
  width: 0,   // definido em runtime
  height: 0,  // definido em runtime
  padding: 16,
  gridRows: 5,
};

export default function Performance() {
  const rightCards = useMemo(
    () => ([
      // OPERAÇÃO
      { icon: "briefcase-variant-outline", title: "Sessões", total: "3", media: "0,13", var: "+100,00%" },
      { icon: "currency-brl", title: <>Receita <Text style={styles.cardUnit}>(R$)</Text></>, total: "0,00", media: "0,00", var: "+100,00%" },
      { icon: "flash-outline", title: <>Energia <Text style={styles.cardUnit}>(kWh)</Text></>, total: "52,20", media: "2,27", var: "+100,00%" },
      { icon: "account-outline", title: "Usuários", total: "2", media: "1,00", var: "+100,00%" },
      // CARREGADORES (cabeçalho diferente abaixo)
    ]),
    []
  );

  // Constrói os pontos (x,y) dentro da área útil do gráfico
  const buildPath = (w, h) => {
    const pad = CHART.padding;
    const innerW = w - pad * 2;
    const innerH = h - pad * 2 - 36; // reserva para eixo X

    // mapeia pontos em ordem dos dados
    const n = SERIES.length - 1;
    return SERIES.map((p, i) => {
      const x = pad + (innerW * i) / n;
      const y = pad + innerH * (1 - p.y); // y invertido
      return { x, y, yVal: p.y };
    });
  };

  // Renderização do SVG com grid, polyline e marcadores
  const ChartSVG = ({ width, height }) => {
    const pts = buildPath(width, height);
    const polyPoints = pts.map(p => `${p.x},${p.y}`).join(" ");

    const pad = CHART.padding;
    const innerH = height - pad * 2 - 36;

    // linhas horizontais do grid
    const grid = Array.from({ length: CHART.gridRows }, (_, i) => {
      const y = pad + (innerH * i) / (CHART.gridRows - 1);
      return (
        <SvgLine
          key={`g-${i}`}
          x1={pad}
          x2={width - pad}
          y1={y}
          y2={y}
          stroke={global.colors.white_border}
          strokeWidth={1}
        />
      );
    });

    return (
      <Svg width={width} height={height}>
        {/* Grid */}
        {grid}

        {/* Linha/Área – polyline */}
        <Polyline
          points={polyPoints}
          fill="none"
          stroke={global.colors.blue_deep}
          strokeWidth={2}
        />

        {/* Pontos importantes (picos) */}
        {pts
          .filter(p => p.yVal > 0.99) // picos
          .map((p, idx) => (
            <Circle
              key={`c-${idx}`}
              cx={p.x}
              cy={p.y}
              r={4}
              fill={global.colors.blue_deep}
            />
          ))}
      </Svg>
    );
  };

  return (
    <View style={styles.page}>
        <Header/>
      {/* Topo: título + datas à direita */}
      <View style={styles.topRow}>
        <Text style={styles.title}>Performance / Sessões</Text>

        <View style={styles.dateRight}>
          <Text style={styles.thisMonth}>Este mês</Text>

          <View style={styles.dateGroup}>
            <View style={styles.dateBox}>
              <MaterialCommunityIcons name="calendar-blank-outline" size={16} color={global.colors.gray_text} style={{ marginRight: 8 }} />
              <Text style={styles.dateText}>01/09/2025</Text>
            </View>
            <View style={styles.dateBox}>
              <MaterialCommunityIcons name="calendar-blank-outline" size={16} color={global.colors.gray_text} style={{ marginRight: 8 }} />
              <Text style={styles.dateText}>23/09/2025</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Corpo: gráfico (esq) + cartões (dir) */}
      <View style={styles.mainRow}>
        {/* ======== GRÁFICO ======== */}
        <View
          style={styles.chartCard}
          onLayout={(e) => {
            const { width, height } = e.nativeEvent.layout;
            CHART.width = width;
            CHART.height = height;
          }}
        >
          {CHART.width > 0 && CHART.height > 0 && (
            <ChartSVG width={CHART.width} height={CHART.height} />
          )}

          {/* Eixo X (rótulos) */}
          <View style={styles.chartXAxis}>
            {X_LABELS.map((d) => (
              <Text key={d} style={styles.axisLabel}>
                {d}
              </Text>
            ))}
          </View>
        </View>

        {/* ======== CARDS ======== */}
        <View style={styles.cardsCol}>
          {/* Cabeçalho OPERAÇÃO */}
          <View style={styles.headersRow}>
            <Text style={[styles.hSmall, { flex: 1 }]}>OPERAÇÃO</Text>
            <Text style={[styles.hPill, { width: 96 }]}>Total</Text>
            <Text style={[styles.hPill, { width: 120 }]}>Média por dia</Text>
            <Text style={[styles.hPill, { width: 110 }]}>
              Variação{" "}
              <MaterialCommunityIcons name="information-outline" size={14} color={global.colors.gray_text} />
            </Text>
          </View>

          {rightCards.map((c) => (
            <View key={`${c.title}`} style={styles.cardRow}>
              <View style={styles.cardTitleWrap}>
                <MaterialCommunityIcons name={c.icon} size={18} color={global.colors.cor_preto} style={{ marginRight: 8 }} />
                <Text style={styles.cardTitle}>{c.title}</Text>
                {typeof c.title === "string" && (
                  <MaterialCommunityIcons name="information-outline" size={14} color={global.colors.gray_text} style={{ marginLeft: 6 }} />
                )}
              </View>
              <Text style={[styles.cardValue, { width: 96, textAlign: "center" }]}>{c.total}</Text>
              <Text style={[styles.cardValue, { width: 120, textAlign: "center" }]}>{c.media}</Text>
              <View style={[styles.cardRight, { width: 110 }]}>
                <Text style={styles.cardValueGreen}>{c.var}</Text>
                <TouchableOpacity style={styles.arrowBtn}>
                  <MaterialCommunityIcons name="arrow-top-right" size={16} color={global.colors.gray_text} />
                </TouchableOpacity>
              </View>
            </View>
          ))}

          {/* Cabeçalho CARREGADORES */}
          <View style={[styles.headersRow, { marginTop: 10 }]}>
            <Text style={[styles.hSmall, { flex: 1 }]}>CARREGADORES</Text>
            <Text style={[styles.hPill, { width: 120 }]}>Média</Text>
            <Text style={[styles.hPill, { width: 110 }]}>
              Variação{" "}
              <MaterialCommunityIcons name="information-outline" size={14} color={global.colors.gray_text} />
            </Text>
          </View>

          {/* Linhas dos carregadores */}
          {[
            { icon: "power-plug-outline", title: "Disponibilidade", media: "8,73%" },
            { icon: "clock-outline", title: "Tx. de Ocupação", media: "0,19%" },
            { icon: "chart-timeline-variant", title: "Tx. de Utilização", media: "0,12%" },
          ].map((c) => (
            <View key={c.title} style={styles.cardRow}>
              <View style={styles.cardTitleWrap}>
                <MaterialCommunityIcons name={c.icon} size={18} color={global.colors.cor_preto} style={{ marginRight: 8 }} />
                <Text style={styles.cardTitle}>{c.title}</Text>
                <MaterialCommunityIcons name="information-outline" size={14} color={global.colors.gray_text} style={{ marginLeft: 6 }} />
              </View>
              <Text style={[styles.cardValue, { width: 120, textAlign: "center" }]}>{c.media}</Text>
              <View style={[styles.cardRight, { width: 110 }]}>
                <Text style={styles.cardValueGreen}>+100,00%</Text>
                <TouchableOpacity style={styles.arrowBtn}>
                  <MaterialCommunityIcons name="arrow-top-right" size={16} color={global.colors.gray_text} />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
