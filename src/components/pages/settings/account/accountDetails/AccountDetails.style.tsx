import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 15
  },

  header: {
    height: 200,
    padding: 10
  },

  headerUsername: {
    color: '#eee',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 5
  },

  userImage: {
    height: 150,
    width: 150,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderColor: '#76ABAE',
    borderWidth: 2,
    borderRadius: 100
  },

  content: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderTopColor: '#eee',
    borderTopWidth: 2,
    columnGap: 20,
    rowGap: 20,
    marginTop: 20
  },

  contentHeader: {
    color: '#eee',
    textAlign: 'center',
    padding: 10,
    fontSize: 18,
    fontWeight: '600',
    flexBasis: '100%'
  },

  box: {
    backgroundColor: '#222831',
    padding: 10,
    borderRadius: 15,
    flexGrow: 1
  },

  boxHeader: {
    backgroundColor: '#76ABAE',
    color: '#222831',
    padding: 10,
    borderRadius: 15
  },

  boxContent: {
    padding: 10,
    color: '#eee'
  },

  logOut: {
    borderColor: '#76ABAE',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: '#222831',
    width: '40%',
    padding: 10,
    marginBottom: 5,
    marginLeft: 'auto',
    marginRight: 'auto'
  },

  logOutText: {
    textAlign: 'center',
    color: '#eee'
  }
})
