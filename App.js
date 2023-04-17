import * as React from 'react';

import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Booking assistant</Text>
      <Text style={styles.subtitle}>Don't lose time, reserve your place now!</Text>
      <Image style= {styles.home} source = {require('./assets/img/home-calendar.png')} ></Image>
      <Button style= {styles.buttonNavigation} title="Search & Book" onPress={() => navigation.navigate('Book')}></Button>
      <TouchableOpacity style={styles.buttonNavigation} onPress={() => alert('¡Hola!')}>
      <Text style={styles.alertHome}>Esto es una alerta</Text>
      </TouchableOpacity>
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Selecciona xxxx para continuar</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Book" component={DetailsScreen} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightskyblue',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'navy',
  },
  subtitle: {
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 20,
    color: 'navy',
  },
  home: {
    marginBottom: 20,
  },
  buttonNavigation:{
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  alertHome: {
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 20,
    color: 'navy',
  },
});

export default App;