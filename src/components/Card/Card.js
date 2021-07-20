import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const Card = ({id, url, name}) => {
  return (
    <View style={styles.mainWrapper} id={id}>
      <Image source={{uri: url}} style={styles.imageStyle} />
    </View>
  );
};

export default Card;
