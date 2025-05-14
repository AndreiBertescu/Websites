import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Workout
  workoutList: {
    flex: 1,
    marginVertical: 5,
    marginTop: -10,
    marginBottom: 10,
    maxHeight: '65%',
  },

  workoutWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginVertical: 10,

    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#bfbfbf',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    elevation: 2
  },

  staticText: {
    color:'#4467c4',
    fontWeight: 600
  },

  // Button
  buttonRow: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '15%'
  },

  circleButton: {
    width: 200,
    height: 76,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#4467c4',
    borderRadius: 38,
    borderWidth: 1,
    borderColor: '#bfbfbf',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },

  // Overlay
  overlay: {
    position: 'absolute',
    top: -100,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10
  },

  form: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
  },

  formTitle: {
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 10
  },
  
  addButton: {
    marginTop: 20,
    padding: 10,
    width: '40%',
    backgroundColor: '#4467c4',
    borderRadius: 5,
    alignItems: 'center'
  }
});
