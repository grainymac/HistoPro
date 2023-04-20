import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {

  const { height } = Dimensions.get('window')

  return (
    <View style={styles.container}>
      <View style={[styles.verticalBar, { height }]}>
        <Text style={styles.timeText}>{new Date().toLocaleTimeString()}</Text>
        <Text style={styles.locationText}>Current Location:</Text>
      </View>
      <Text>HistoPro</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d7fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  verticalBar: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 45,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  timeText: {
    fontSize: 12,
    fontWeight: 'bold',
    width: 100,
    margin: 0,
    transform: [{ rotate: '90deg' }],
  },
  locationText: {
    fontSize: 10,
    width: 100,
    textAlign: 'center',
    transform: [{ rotate: '90deg' }],
  },
});
