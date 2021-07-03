import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#f5f4f8',
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },

  input: {
    flex: 1,
    backgroundColor: '#f5f4f8',
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },

  inputIOSShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    borderRadius: 3.84
  },

  inputAndroidShadow: {
    elevation: 5
  },

  addButton: {
    backgroundColor: '#3fad27',
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5
  }
});
