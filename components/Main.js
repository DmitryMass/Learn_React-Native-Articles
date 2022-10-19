import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
  Modal,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { globalStyle } from '../style/style';
import AddForm from './Form';

const Main = ({ navigation }) => {
  const [news, setNews] = useState([
    {
      title: 'Apple',
      description: 'Apple community',
      image:
        'https://images.unsplash.com/photo-1588058365548-9efe5acb8077?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      key: '1',
    },
    {
      title: 'Google',
      description: 'Google community',
      image:
        'https://images.unsplash.com/photo-1588058365548-9efe5acb8077?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      key: '2',
    },
    {
      title: 'Samsung',
      description: 'Samsung community',
      image:
        'https://images.unsplash.com/photo-1588058365548-9efe5acb8077?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      key: '3',
    },
  ]);
  const [modalWindow, setModalWindow] = useState(false);

  const addNewArticle = (article) => {
    setNews((list) => {
      article.key = Math.random().toString(36).substring(5);
      return [article, ...list];
    });
    setModalWindow(false);
  };
  // const [isLoading, setIsLoading] = useState(false);
  // const [limit, setLimit] = useState(5);
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       setIsLoading(true);
  //       const data = await fetch(
  //         `https://fakestoreapi.com/products?limit=${limit}`
  //       );
  //       const res = await data.json();
  //       setNews(res);
  //       setIsLoading(false);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  //   fetchData();
  // }, [limit]);

  // const handleMore = () => {
  //   setLimit((prev) => prev + 5);
  // };

  return (
    <View style={globalStyle.main}>
      <Modal visible={modalWindow}>
        <View>
          <AntDesign
            style={styles.iconClose}
            name='closecircle'
            size={34}
            color='red'
            onPress={() => setModalWindow(false)}
          />
        </View>
        <View style={globalStyle.main}>
          <Text style={styles.title}>Додати статтю</Text>
          <AddForm addNewArticle={addNewArticle} />
        </View>
      </Modal>
      <AntDesign
        style={styles.iconAdd}
        name='pluscircle'
        size={34}
        color='green'
        onPress={() => setModalWindow(true)}
      />
      <Text style={[globalStyle.title, styles.header]}>Головна сторінка</Text>
      <View style={globalStyle.main}>
        <FlatList
          data={news}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.id}
              style={styles.item}
              onPress={() => navigation.navigate('FullInfo', item)}
            >
              <Image style={styles.image} source={{ uri: item.image }} />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.anons}>{item.description}</Text>
            </TouchableOpacity>
          )}
        />
        {/* {isLoading ? (
          <View>
            <Text style={globalStyle.title}>Loading...</Text>
          </View>
        ) : (
          <FlatList
            data={news}
            renderItem={({ item }) => (
              <TouchableOpacity
                key={item.id}
                style={styles.item}
                onPress={() => navigation.navigate('FullInfo', item)}
              >
                <Image style={styles.image} source={{ uri: item.image }} />
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.anons}>{item.description}</Text>
              </TouchableOpacity>
            )}
          />
        )} */}
      </View>
      {/* <Button onPress={handleMore} title='Показати більше' /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 30,
  },
  item: {
    width: '100%',
    marginBottom: 30,
  },
  title: {
    fontFamily: 'rs-bold',
    fontSize: 22,
    textAlign: 'center',
    marginTop: 20,
    color: '#474747',
  },
  anons: {
    fontFamily: 'rs-light',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 5,
    color: '#474747',
  },
  image: {
    width: '100%',
    height: 150,
  },
  iconAdd: {
    textAlign: 'center',
    marginBottom: 15,
  },
  iconClose: {
    textAlign: 'center',
  },
});

export default Main;
