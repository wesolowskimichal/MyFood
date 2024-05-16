import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  loaderWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  wrapper: {
    flex: 1,
    padding: 10
  },

  mealsNumberBox: {
    backgroundColor: '#222831',
    borderColor: '#76ABAE',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    borderRadius: 10,
    borderWidth: 2,
    height: 80
  },

  mealsNumberBoxTextWrapper: {
    flexBasis: '50%',
    height: '100%',
    justifyContent: 'center'
  },

  mealsNumberBoxText: {
    fontSize: 20,
    color: '#eee',
    marginLeft: 10
  },

  mealsNumberBoxValueWrapper: {
    flexBasis: '20%',
    height: '100%',
    justifyContent: 'center'
  },

  mealsNumberBoxValue: {
    textAlign: 'right',
    fontSize: 20,
    padding: 8,
    backgroundColor: '#EEEEEE'
  },

  mealsNumberBoxButtonsWrapper: {
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  mealsNumberBoxButton: {
    borderColor: '#eee',
    borderRadius: 100,
    borderWidth: 1,
    width: 40,
    height: 40,
    justifyContent: 'center'
  },

  mealsNumberBoxButtonText: {
    fontSize: 20,
    color: '#eee',
    textAlign: 'center'
  },

  mealsContainer: {
    flex: 1,
    marginTop: 10
  },

  saveConfigButton: {
    // position: 'absolute',
    // bottom: 10,
    // right: 10,
    width: '40%',
    backgroundColor: 'red'
  }
})
