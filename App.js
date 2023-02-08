import { StatusBar } from 'expo-status-bar';
import { Text, View, SafeAreaView } from 'react-native';
import styles from './src/styles/styles';
import Engine from './src/main/engine';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Engine />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}


