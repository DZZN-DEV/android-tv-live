import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    color: 'white',
    padding: 10,
    fontSize: 28,
    height: 104,
  },
  itemContainer: {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'azure',
    marginTop: 10,
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  image: {
    flex: 1,
  },
});

export default styles;
