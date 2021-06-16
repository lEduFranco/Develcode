import React, { useEffect } from "react";
import { View, StatusBar } from "react-native";
import SplashScreen from "react-native-splash-screen";
import { NavigationContainer } from '@react-navigation/native';

import AppUser from './hooks';

import Routes from './routes';


const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
    <StatusBar
      barStyle="light-content"
      backgroundColor="#1a77bc"
      translucent
    />

    <AppUser>
      <View style={{ flex: 1, backgroundColor: '#f7f5fa' }}>
        <Routes />
      </View>
    </AppUser>
      
  </NavigationContainer>
  );
};

export default App;
