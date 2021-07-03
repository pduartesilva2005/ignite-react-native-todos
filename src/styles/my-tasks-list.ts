import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  header: {
    color: '#3d3d4d',
    fontSize: 22,
    fontFamily: 'Poppins_600SemiBold'
  },

  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },

  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3d3d4d',
    marginRight: 10
  },

  taskText: {
    color: '#3d3d4d'
  },

  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },

  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273fad',
    marginRight: 10
  },

  taskTextDone: {
    color: '#a09cb1',
    textDecorationLine: 'line-through'
  }
});
