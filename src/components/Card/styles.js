import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainWrapper: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    backgroundColor: 'grey',
  },
});
export default styles;
