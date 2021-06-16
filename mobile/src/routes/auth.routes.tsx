import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#f5f5f5' },
    }}
  >
    <Auth.Screen name="Register" component={Register} />
    <Auth.Screen name="Dashboard" component={Dashboard} />
    <Auth.Screen name="Profile" component={Profile} />
  </Auth.Navigator>
);

export default AuthRoutes;
