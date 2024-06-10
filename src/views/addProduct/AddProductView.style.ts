import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  form: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    // flexWrap: 'wrap',
    padding: 4,
    alignContent: 'center'
  },
  inputNameField: {
    flexBasis: 50,
    borderWidth: 1,
    borderColor: '#eee',
    width: '100%',
    padding: 10,
    borderRadius: 15,
    color: '#eee'
  },

  settings: {
    marginLeft: 'auto',
    marginRight: 'auto',
    flexBasis: '40%',
    display: 'flex',
    flexDirection: 'column'
  },

  macroArea: {
    padding: 15,
    flexBasis: '100%',
    display: 'flex',
    flexDirection: 'column'
  },

  amountText: {
    color: '#eee',
    fontSize: 15,
    alignSelf: 'center'
  },

  inputAmountField: {
    flexBasis: '30%'
  },

  macroBox: {
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    rowGap: 15,
    columnGap: 15
  },

  macroTypeText: {
    color: '#888',
    fontSize: 15,
    alignSelf: 'center'
  },

  inputMacorField: {
    borderWidth: 1,
    borderColor: '#eee',
    padding: 10,
    borderRadius: 15,
    color: '#eee',
    textAlign: 'center',
    flexBasis: '50%'
  },
  sizeWrapper: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  sizeValAmount: {
    color: '#eee',
    backgroundColor: '#76ABAE',
    width: 80,
    padding: 3,
    textAlign: 'center',
    borderRadius: 10,
    borderColor: '#8ccdd1',
    borderWidth: 1
  },
  sizeValTypeButton: {
    flexBasis: '20%',
    backgroundColor: '#76ABAE',
    borderRadius: 10,
    borderColor: '#8ccdd1',
    borderWidth: 1,
    justifyContent: 'center'
  },

  sizeValTypeText: {
    color: '#eee',
    textAlign: 'center'
  },
  sizeValDropdownMenu: {
    backgroundColor: '#76ABAE',
    borderRadius: 10,
    padding: 2,
    marginTop: -33
  },
  sizeValDropdownMenuItem: {
    color: '#eee',
    textAlign: 'center',
    borderColor: '#222831',
    borderBottomWidth: 1,
    padding: 8
  },

  imageWrapper: {
    width: '100%',
    flexBasis: '45%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  imageWrapperImage: {
    flexBasis: '80%',
    aspectRatio: 1 / 1
  },

  pickPressable: {
    backgroundColor: '#76ABAE',
    padding: 10,
    borderRadius: 10
  },

  pickPressableText: {
    color: '#eee'
  },

  savePressable: {
    position: 'absolute',
    backgroundColor: '#76ABAE',
    borderRadius: 20,
    padding: 5,
    right: 10,
    bottom: 10
  },
  saveIcon: {
    width: 50,
    height: 50
  }
})
