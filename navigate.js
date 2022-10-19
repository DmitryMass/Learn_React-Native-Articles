import React from 'react';
import Main from './components/Main';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import FullInfo from './components/Contacts';

const Stack = createStackNavigator();

const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Main'
          component={Main}
          options={{
            title: 'Головна',
            headerStyle: {
              backgroundColor: 'rgb(32,89,176)',
              height: 50,
            },
            headerTitleStyle: {
              color: 'white',
              fontWeight: '400',
            },
          }}
        />
        <Stack.Screen
          name='FullInfo'
          component={FullInfo}
          options={{ title: 'Стаття' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;
