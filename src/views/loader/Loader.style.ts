import { StyleSheet } from 'react-native'

const size = 80

export const styles = StyleSheet.create({
  wrapper: {
    width: size,
    height: size,
    justifyContent: 'center',
    alignItems: 'center'
  },
  background: {
    width: '100%',
    height: '100%',
    borderRadius: size / 2,
    borderWidth: 4,
    opacity: 0.25
  },
  progress: {
    width: '100%',
    height: '100%',
    borderRadius: size / 2,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderWidth: 4,
    position: 'absolute'
  }
})
