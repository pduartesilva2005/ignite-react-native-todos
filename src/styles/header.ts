import { StyleSheet, StatusBar } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#273fad',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

  headerText: {
    fontSize: 22,
    color: '#fff',
    fontFamily: 'Poppins_400Regular'
  }
});
