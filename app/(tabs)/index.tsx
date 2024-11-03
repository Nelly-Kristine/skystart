import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>skystart</Text>
      </View>
      {/* Local Image */}
      <Image
        source={require('./App/Sky.jpg')}
        style={styles.image}
      />

      {/* Colored Boxes */}
      <View style={styles.boxContainer}>
        <View style={[styles.box, { backgroundColor: 'lime' }]} />
        <View style={[styles.box, { backgroundColor: 'yellow' }]} />
        <View style={[styles.box, { backgroundColor: 'black' }]} />
      </View>

      {/* Center Text */}
      <Text style={styles.centerText}>Se været i dag :D</Text>

      {/* OK Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>OK</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bed6e7',
  },
  header: {
    backgroundColor: '#4f99cf',
    width: '100%',
    paddingVertical: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#eee4e8',
    fontSize: 18,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 150,
    marginVertical: 10,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginVertical: 20,
  },
  box: {
    width: 50,
    height: 50,
  },
  centerText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#0a70cc',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
