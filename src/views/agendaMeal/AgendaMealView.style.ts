import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapper: {
    padding: 2,
    paddingBottom: 0,
    // maxHeight: 600,
    display: 'flex',
    flexDirection: 'column',
    borderBottomWidth: 1,
    borderBottomColor: '#222831'
  },

  header: {
    flexBasis: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap'
  },

  headerLeft: {
    flexBasis: '75%'
  },

  headerLeftNameText: {
    color: '#eee',
    fontSize: 19,
    fontWeight: '500',
    marginBottom: 2,
    width: '50%',
    paddingLeft: 15
  },

  headerLeftBottom: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap'
  },

  headerLeftKcalText: {
    color: '#eee',
    paddingLeft: 10,
    flexBasis: '50%',
    textAlign: 'center'
  },

  headerLeftBottomMacroElements: {
    flexBasis: '50%',
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-between'
  },

  headerLeftBottomMacroElement: {
    color: '#eee',
    textAlign: 'center'
  },

  headerRight: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },

  headerRightPressableAdd: {
    borderWidth: 1,
    borderColor: '#eee',
    borderRadius: 25
  },

  headerRightPressableImage: {
    height: 35,
    width: 35
  }
})
