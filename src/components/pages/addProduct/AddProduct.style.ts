import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  cameraContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  camera: {
    flex: 1
  },
  flashButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 2
  },

  flashButtonImage: {
    width: 50,
    height: 50
  },

  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center'
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  },

  wrapper: {
    flex: 1,
    backgroundColor: '#31363F',
    padding: 1
  },

  prodNotFoundTextBig: {
    fontSize: 20,
    color: '#FF5733',
    textAlign: 'center'
  },
  prodNotFoundTextSmall: {
    fontSize: 18,
    color: '#FFBF00',
    textAlign: 'center'
  },
  addProductForm: {}
})
