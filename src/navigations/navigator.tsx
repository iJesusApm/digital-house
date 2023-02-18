import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import DetailScreen from '../containers/Detail';
import HomeScreen from '../containers/Home';

import {SCREENS_ROUTES} from './constans';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={SCREENS_ROUTES.HOME}
        screenOptions={{
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
          animation: 'slide_from_right',
        }}>
        <Stack.Screen name={SCREENS_ROUTES.HOME} component={HomeScreen} options={{headerShown: false}} />
        <Stack.Screen name={SCREENS_ROUTES.DETAIL} component={DetailScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
