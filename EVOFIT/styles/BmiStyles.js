import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20
  },

  bmiChart: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    marginTop: 60,

    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    elevation: 10,
  },

  line: {
    flex: 1,
    height: 100,
    
    alignItems: 'center',
    justifyContent: 'center',
  },

  lineText: {
    marginHorizontal: 7,
    fontSize: 10,
    color: 'black',
    fontWeight: '900',
    textTransform: 'uppercase',
  }
});
