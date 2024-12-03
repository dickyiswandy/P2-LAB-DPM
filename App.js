import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const App = () => {
  const box1Anim = useRef(new Animated.Value(0)).current; // Animasi untuk kotak 1
  const box2Anim = useRef(new Animated.Value(0)).current; // Animasi untuk kotak 2

  useEffect(() => {
    // Animasi untuk kedua kotak
    Animated.sequence([
      Animated.timing(box1Anim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(box2Anim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, [box1Anim, box2Anim]);

  return (
    <View style={styles.container}>
      {/* Teks di tengah dengan sedikit bayangan */}
      <Text style={styles.text}>Desain Menarik</Text>
      
      {/* Kotak-kotak dengan animasi */}
      <View style={styles.boxContainer}>
        <Animated.View
          style={[
            styles.box,
            styles.box1,
            {
              transform: [
                {
                  translateX: box1Anim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-150, 0], // Bergerak dari luar layar kiri ke posisinya
                  }),
                },
              ],
            },
          ]}
        />
        <Animated.View
          style={[
            styles.box,
            styles.box2,
            {
              transform: [
                {
                  translateX: box2Anim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [150, 0], // Bergerak dari luar layar kanan ke posisinya
                  }),
                },
              ],
            },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Latar belakang layar
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff', // Warna latar belakang biru muda lembut
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Teks di tengah dengan efek bayangan
  text: {
    fontSize: 26,
    color: '#1e90ff', // Warna biru lebih cerah
    fontWeight: 'bold',
    textShadowColor: '#87ceeb', // Bayangan teks berwarna biru muda
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    marginBottom: 30,
  },
  // Container untuk kotak
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 40,
  },
  // Gaya umum untuk kotak
  box: {
    width: 100,
    height: 100,
    borderRadius: 10, // Membuat sudut membulat
  },
  // Kotak 1
  box1: {
    backgroundColor: '#ff6347', // Warna tomato
    shadowColor: '#000', // Efek bayangan untuk kedalaman
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  // Kotak 2
  box2: {
    backgroundColor: '#4682b4', // Warna steel blue
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});

export default App;
