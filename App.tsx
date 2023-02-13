import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { HomePage } from './src/screens/HomePage'

export default function App() {
  return <HomePage />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6b1010',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
