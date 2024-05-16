import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapper: {
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#222831',
    borderColor: '#eee',
    borderWidth: 1,
    borderRadius: 10,
    padding: 2,
    paddingBottom: 10
  },

  header: {
    borderRadius: 10
  },

  headerNameWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  headerText: {
    backgroundColor: '#76ABAE',
    // borderTopLeftRadius: 10,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    padding: 5,
    width: 'auto'
  },

  removeMealButton: {
    width: 40,
    height: 40,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#a63c47',
    justifyContent: 'center',
    margin: 5
  },

  removeMealButtonImage: {
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 10
  },

  headerValue: {
    padding: 10,
    borderColor: 'rgb(87, 125, 127)',
    borderWidth: 2,
    backgroundColor: '#31363F',
    borderRadius: 10,
    borderTopLeftRadius: 0,
    color: '#eee'
  },

  macroBox: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    columnGap: 10
  },

  macroBoxElement: {
    flexBasis: '20%'
  },

  macroBoxElementText: {
    color: '#eee',
    textAlign: 'center'
  },

  kcalText: {
    color: 'pink'
  },
  kcalValue: {
    textAlign: 'center',
    color: 'rgb(232, 63, 201)',
    backgroundColor: '#31363F',
    borderRadius: 10
  },

  proteinsText: {
    color: 'rgb(48, 113, 179)'
  },
  proteinsValue: {
    textAlign: 'center',
    color: 'rgb(63, 147, 232)',
    backgroundColor: '#444',
    borderRadius: 10
  },
  fatsText: {
    color: 'yellow'
  },
  fatsValue: {
    textAlign: 'center',
    color: 'rgb(207, 232, 63)',
    backgroundColor: '#444',
    borderRadius: 10
  },
  carbsText: {
    color: 'orange'
  },
  carbsValue: {
    textAlign: 'center',
    color: 'rgb(232, 159, 63)',
    backgroundColor: '#444',
    borderRadius: 10
  }
})
