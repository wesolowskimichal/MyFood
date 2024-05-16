import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  loaderWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapper: {
    flex: 1
  },
  itemWrapper: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },

  delWrapper: {
    marginLeft: 10,
    marginRight: 10,
    height: 60,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },

  delButton: {
    height: '100%',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#a63c47',
    borderRadius: 30,
    padding: 14,
    backgroundColor: '#74252e'
  },

  delButtonImg: {
    height: 40
  },

  addProductButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#222831',
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#76ABAE',
    borderWidth: 1,
    borderRadius: 60
  },
  addProductButtonIcon: {
    width: 40,
    height: 40
  }
})
