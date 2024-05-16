import React, { useState, useEffect, useCallback } from 'react'
import { Text, TextInput, TouchableOpacity, View, Keyboard, BackHandler } from 'react-native'
import { useUser } from '../../../../../contexts/UserContext'
import { ApiService } from '../../../../../services/api/ApiService'
import { ResponseCode } from '../../../../../services/api/ResponseCode'
import { styles } from './Form.style'
import { AccountRenderName, RenderChildProps } from '../../../../../types/Types'
import { useFocusEffect } from '@react-navigation/native'

export const RegisterForm = ({ setRender }: RenderChildProps<AccountRenderName>) => {
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [badCredentials, setBadCredentials] = useState(false)
  const [infoVisibility, setInfoVisibility] = useState(true)
  const { setUser } = useUser()

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        setRender('Login')
        return true
      }
      BackHandler.addEventListener('hardwareBackPress', onBackPress)
      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress)
    }, [])
  )

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setInfoVisibility(false)
    })

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setInfoVisibility(true)
    })

    return () => {
      keyboardDidShowListener.remove()
      keyboardDidHideListener.remove()
    }
  }, [])

  const handleRegister = () => {
    const putUser = async () => {}
    putUser()
  }

  // TODO : ADD LOADER (LOOK IN LoginForm)
  return (
    <View style={styles.wrapper}>
      <View style={styles.form}>
        <TextInput
          style={[styles.formInput, badCredentials && { borderColor: 'rgb(160, 34, 34)' }]}
          placeholder="Email"
          placeholderTextColor="#76ABAE"
          onChangeText={email => setEmail(email)}
          value={email}
          inputMode="email"
          keyboardType="email-address"
        />
        <View style={styles.nameBox}>
          <TextInput
            style={[styles.formInput, styles.name, badCredentials && { borderColor: 'rgb(160, 34, 34)' }]}
            placeholder="First name"
            placeholderTextColor="#76ABAE"
            onChangeText={firstName => setFirstName(firstName)}
            value={firstName}
          />
          <TextInput
            style={[styles.formInput, styles.name, badCredentials && { borderColor: 'rgb(160, 34, 34)' }]}
            placeholder="Last name"
            placeholderTextColor="#76ABAE"
            onChangeText={lastName => setLastName(lastName)}
            value={lastName}
          />
        </View>
        <TextInput
          style={[styles.formInput, badCredentials && { borderColor: 'rgb(160, 34, 34)' }]}
          placeholder="Username"
          placeholderTextColor="#76ABAE"
          onChangeText={username => setUsername(username)}
          value={username}
        />
        <TextInput
          style={[styles.formInput, badCredentials && { borderColor: 'rgb(160, 34, 34)' }]}
          placeholder="Password"
          placeholderTextColor="#76ABAE"
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity style={styles.formSubmit} onPress={handleRegister}>
          <Text style={styles.formSubmitText}>REGISTER</Text>
        </TouchableOpacity>
        {badCredentials && <Text style={styles.errorText}>Incorrect username or password</Text>}
      </View>
      {infoVisibility && (
        <View style={styles.infoBox}>
          <Text style={styles.infoBoxText}>You have an account? </Text>
          <TouchableOpacity style={styles.infoBoxRedirect} onPress={() => setRender('Login')}>
            <Text style={styles.infoBoxRedirectText}>Login</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}
