import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  row: {
    backgroundColor: '#222831',
    flexDirection: 'row',
    padding: 5
  },
  productName: {
    color: '#eee',
    flexBasis: '37.5%',
    textAlign: 'center'
  },
  productMacro: {
    flexBasis: '37.5%'
  },
  productMacroBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  productMacroText: {
    color: '#76ABAE',
    textAlign: 'center'
  }
})
