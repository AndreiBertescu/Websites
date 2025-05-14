import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  // Timer
  timerText: {
    fontSize: 78,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 300
  },

  // Laps
  lapList: {
    flex: 1,
    marginVertical: 5,
    maxHeight: '53%',
  },

  lapText: {
    fontSize: 18,
    marginVertical: 2,
  },

  // Buttons
  buttonRow: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '15%'
  },

  circleButton: {
    width: 76,
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
  }
});
