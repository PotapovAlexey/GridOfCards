import React, {useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  Button,
  Image,
  Alert,
} from 'react-native';
import styles from './styles';
import state from '../../mobX/index';
import {observer} from 'mobx-react-lite';
import Card from '../../components/Card/Card';
const MainScreen = () => {
  const mobXState = state;
  useEffect(() => {
    mobXState.getCardsFromJsonServer();
  }, []);
  const onPicturePress = id => {
    mobXState.setPickedCards(id);
  };
  console.log(mobXState.tappedCards);
  // const showTappedCardsId = () => {
  //   mobXState.tappedCards.map(item => Alert.alert(item));
  // };
  return (
    <SafeAreaView style={styles.mainWrapper}>
      <View>
        <FlatList
          data={mobXState.cards}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Card
              id={item.id}
              url={item.imageUrl}
              name={item.name}
              onPress={onPicturePress}
            />
          )}
        />
      </View>

      <Button title="Submit" />
    </SafeAreaView>
  );
};

export default observer(MainScreen);
