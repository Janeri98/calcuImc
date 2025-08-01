import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import ResultadoIMC from "./components/ResultadoIMC";

const App: React.FC = () => {
  const [peso, setPeso] = useState<number>(70);
  const [altura, setAltura] = useState<number>(1.7);
  const [imc, setImc] = useState<number>(0);
  const [categoria, setCategoria] = useState<string>("");

  useEffect(() => {
    const nuevoIMC = peso / (altura * altura);
    setImc(nuevoIMC);

    if (nuevoIMC < 18.5) setCategoria("Bajo peso");
    else if (nuevoIMC <= 24.9) setCategoria("Peso normal");
    else if (nuevoIMC <= 29.9) setCategoria("Sobrepeso");
    else setCategoria("Obesidad");
  }, [peso, altura]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>

      <View style={styles.section}>
        <Text style={styles.label}>Peso: {peso} kg</Text>
        <View style={styles.buttons}>
          <Button title="+1 kg" onPress={() => setPeso(p => p + 1)} />
          <Button title="-1 kg" onPress={() => setPeso(p => p - 1)} />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Altura: {altura.toFixed(2)} m</Text>
        <View style={styles.buttons}>
          <Button title="+1 cm" onPress={() => setAltura(a => a + 0.01)} />
          <Button title="-1 cm" onPress={() => setAltura(a => a - 0.01)} />
        </View>
      </View>

      <ResultadoIMC imc={imc} categoria={categoria} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#afa2b1ff",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#343a40",
  },
  section: {
    marginBottom: 25,
    width: "100%",
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: "#495057",
  },
  buttons: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
});

export default App;



