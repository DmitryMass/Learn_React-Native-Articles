import React from 'react';
import Navigate from './navigate';
import { useFonts } from 'expo-font';
import { StatusBar } from 'react-native';

const App = () => {
  const [loaded] = useFonts({
    'rs-bold': require('./assets/fonts/RobotoSlab-Bold.ttf'),
    'rs-light': require('./assets/fonts/RobotoSlab-Light.ttf'),
    'rs-regular': require('./assets/fonts/RobotoSlab-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  if (loaded) {
    return (
      <>
        <StatusBar style='auto' />
        <Navigate />
      </>
    );
  }
};

export default App;
