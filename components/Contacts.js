import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { globalStyle } from '../style/style';

const FullInfo = ({ route, navigation }) => {
  const changePage = () => {
    navigation.goBack();
  };
  return (
    <View style={globalStyle.main}>
      <Image style={styles.image} source={{ uri: route.params.image }} />
      <Text style={[globalStyle.title, styles.header]}>
        {route.params.title}
      </Text>
      <Text style={styles.full}>{route.params.description}</Text>
      <Button color={'blue'} onPress={changePage} title='На головну' />
    </View>
  );
};

const styles = StyleSheet.create({
  full: {
    fontFamily: 'rs-light',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
    color: '#474747',
  },
  header: {
    fontSize: 25,
    marginTop: 25,
  },
  image: {
    width: '100%',
    height: 150,
  },
});

export default FullInfo;
