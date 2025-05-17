import { StyleSheet } from 'react-native';

export const global = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#fff'
  },
  
  container: {
    flex: 1,
    padding: 20,
    paddingVertical: 35,
    backgroundColor: '#fff',
    alignItems: 'center'
  },

  bannerContainer: {
    position: 'relative', 
    height: 200, 
    marginBottom: 20
  },

  titlu: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  bigTitle: {
    fontSize: 50,
    fontWeight: 900,
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',

    position: 'absolute',
    top: '32%',
    width: '100%',
  },

  header: {
    fontWeight: 600,
    color: '#696969',
    fontSize: 20,
    textAlign: "center",
  },

  text: {
    fontWeight: 600,
    color: '#000',
    fontSize: 16,
    textAlign: "center"
  },

  textLeft: {
    color: '#000',
    fontSize: 16,
    textAlign: "left"
  },

  coloredText: {
    fontWeight: 600,
    color: '#4467c4',
    fontSize: 16,
    textAlign: "center"
  },

  // Horizontal line
  hr: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },

  line: {
    flex: 1,
    height: 3,
    backgroundColor: '#bfbfbf',
  },

  hrText: {
    marginHorizontal: 7,
    fontSize: 15,
    color: '#4467c4',
    fontWeight: '600',
    textTransform: 'uppercase'
  },

  // Long button
  longButton: {
    width: '100%',
    height: 40,
    marginVertical: 4,
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#bfbfbf',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    elevation: 10,
  },

  customButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 700,
    textTransform: 'uppercase'
  },

  // 1 line input
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left',
    paddingVertical: 10
  },

  input: {
    width: 70,
    margin: 10,
    textAlign: 'center',

    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#bfbfbf',
  },
});
