import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 3,
    marginVertical: 3,
    height: 150,
    width: 150,
    paddingBottom: 10,
    backgroundColor: 'white',
  },
  tapedMainWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 3,
    marginVertical: 3,
    height: 150,
    width: 150,
    paddingBottom: 10,
    backgroundColor: 'grey',
  },
  imageStyle: {
    width: 100,
    height: 100,
  },
  tappedCatsNameStyle: {
    color: 'red',
  },
  catsNameStyle: {
    color: 'black',
  },
});
export default styles;
