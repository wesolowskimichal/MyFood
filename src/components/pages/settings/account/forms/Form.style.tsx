import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  loadingWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  wrapper: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 50
  },

  form: {
    padding: 10
  },

  formInput: {
    color: '#eee',
    padding: 10,
    marginBottom: 10,
    borderColor: '#76ABAE',
    borderWidth: 1,
    borderRadius: 20
  },

  formSubmit: {
    borderRadius: 20,
    width: '50%',
    backgroundColor: '#76ABAE',
    padding: 10,
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  formSubmitText: {
    color: '#eee',
    textAlign: 'center'
  },

  errorText: {
    marginTop: 10,
    color: 'rgb(160, 34, 34)',
    fontWeight: '500',
    textAlign: 'center'
  },

  infoBox: {},

  infoBoxText: {
    color: '#eee',
    textAlign: 'center'
  },

  infoBoxRedirect: {
    padding: 10
  },

  nameBox: {
    flexDirection: 'row'
  },

  name: {
    flex: 1
  },

  infoBoxRedirectText: {
    textAlign: 'center',
    fontWeight: '500',
    color: '#fff'
  }
})
