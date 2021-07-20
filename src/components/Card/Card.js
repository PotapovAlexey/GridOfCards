import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const Card = ({id, url, name, onPress,bacgroundColor}) => {
  return (
    <View style={bacgroundColor?styles.tapedMainWrapper:styles.mainWrapper} >
      {/* <Text>Тоша</Text> */}
      <TouchableOpacity
       
        id={id}
        onPress={() => onPress(id)}>
        <Image source={{uri: url}} style={styles.imageStyle} />
      </TouchableOpacity>
    </View>
  );
};

export default Card;
