import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  elementSarcina: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#eef', 
    padding: 10,
    marginBottom: 5,
    borderRadius: 5
  },

  textSarcina: {
    fontSize: 16
  },

  progressCircle: {
    color: '#00bfff',
    borderWidth: 2,
    thickness: 10,
    unfilledColor: '#fff'
  },
  
  // Card buttons
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',

    paddingTop: 20,
    paddingBottom: 20
  },

  customButton: {
    width: '48%',
    height: '1',  // must stay in order for aspectRatio to work 
    aspectRatio: 1,
    marginBottom: '4%',
    paddingTop: '10',
    alignItems: 'center',

    backgroundColor: '#fff',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#bfbfbf',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    elevation: 15,
  },

  customButtonText: {
    color: '#696969',
    fontSize: 14,
    fontWeight: 700,
    textTransform: 'uppercase'
  }
});
