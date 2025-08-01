import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface ResultadoIMCProps {
  imc: number;
  categoria: string;
}

const ResultadoIMC: React.FC<ResultadoIMCProps> = ({ imc, categoria }) => {
  return (
    <View style={styles.resultadoContainer}>
      <Text style={styles.title}> Resultado  IMC</Text>
      <Text style={styles.result}>IMC: {imc.toFixed(2)}</Text>
      <Text style={styles.result}>Clasificacion: {categoria}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  resultadoContainer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  result: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default ResultadoIMC;

