import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#222831',
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 10,
    padding: 2,
    height: 60,
    justifyContent: 'center'
  },

  vertWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  nameWrapper: {
    width: '65%',
    justifyContent: 'center',
    padding: 4
  },
  nameVal: {
    color: '#eee'
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
    backgroundColor: '#76ABAE',
    padding: 6,
    width: 40,
    borderRadius: 10,
    borderColor: '#8ccdd1',
    borderWidth: 1
  },
  sizeValTypeText: {
    color: '#eee',
    textAlign: 'center'
  },
  sizeValDropdownMenu: {
    backgroundColor: '#76ABAE',
    borderRadius: 10,
    marginTop: -33,
    padding: 2
  },
  sizeValDropdownMenuItem: {
    color: '#eee',
    textAlign: 'center',
    borderColor: '#222831',
    borderBottomWidth: 1,
    padding: 8
  }
})
