import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    padding: 5
  },

  picture: {
    borderWidth: 1,
    borderColor: '#eee',
    aspectRatio: 1 / 1,
    height: '35%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 15
  },

  nameWrapper: {
    height: '7%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  name: {
    textAlign: 'center',
    color: '#76ABAE',
    fontSize: 25,
    fontWeight: '500'
  },

  amountContainer: {
    height: 75,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },

  amountWrapper: {
    flexBasis: '80%',
    height: '80%',
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-evenly'
  },

  amount: {
    width: '50%',
    borderWidth: 1,
    textAlign: 'center',
    padding: 5,
    borderRadius: 10,
    borderColor: '#76ABAE',
    color: '#eee'
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

  macroInfoTable: {
    marginTop: '5%',
    display: 'flex',
    justifyContent: 'center'
  },

  tableRow: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#222831'
  },
  tableColumn: {
    flexBasis: '25%',
    borderRightWidth: 1,
    borderColor: '#222831',
    textAlign: 'center',
    padding: 5,
    color: '#eee'
  },

  info: {
    display: 'flex',
    flexDirection: 'row',
    flexBasis: '50%'
  },
  infoLeft: {
    flexBasis: '50%',
    display: 'flex',
    flexDirection: 'column'
  },
  infoLeftElement: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 15
  },
  infoLeftElementType: {
    color: '#43787b',
    fontSize: 16
  },
  infoLeftElementValue: {
    color: '#eee',
    fontSize: 16
  },
  infoRight: {
    flexBasis: '50%',
    display: 'flex',
    flexDirection: 'row'
  },
  infoKcalWrapper: {
    flexBasis: '75%',
    borderWidth: 1,
    borderColor: '#222831',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15
  },
  infoKcalBack: {
    backgroundColor: '#222831',
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },
  infoKcalType: {
    color: '#43787b',
    textAlign: 'center',
    fontSize: 16
  },
  infoKcalValue: {
    textAlign: 'center',
    fontSize: 36,
    color: '#76ABAE'
  },
  addWrapper: {
    marginTop: '5%',
    marginBottom: '5%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  addButton: {
    height: '70%',
    width: '40%',
    alignItems: 'center',
    backgroundColor: '#76ABAE',
    justifyContent: 'center',
    borderRadius: 25
  },
  addText: {
    color: '#31363F'
  }
})
