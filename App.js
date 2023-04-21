import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {

  const { height } = Dimensions.get('window')

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.profileContainer}>
        </View>
        <View style={[styles.horizontalBar, { height: 50 }]}>
        </View>
      </View>
      <View style={[styles.verticalBar, { height }]}>
        <Text style={styles.timeText}>{new Date().toLocaleTimeString()}</Text>
        <Text style={styles.locationText}>Hello</Text>
      </View>
      <Text style={styles.appTitle}>HistoPro</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3d7fff',
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
  topBar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  }, 
  profileContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    marginRight: 10,
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  appTitle: {
    marginLeft: 20,
    fontSize: 50,
    position: 'absolute',
    top: 30,
    left: 125,
  }
});
