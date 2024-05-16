import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useUser } from '../../../../../contexts/UserContext'
import { ApiService } from '../../../../../services/api/ApiService'
import { ResponseCode } from '../../../../../services/api/ResponseCode'
import { styles } from './Form.style'
import { AccountRenderName, RenderChildProps } from '../../../../../types/Types'
import Loader from '../../../../../views/loader/Loader'

export const LoginForm = ({ setRender }: RenderChildProps<AccountRenderName>) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [badCredentials, setBadCredentials] = useState(false)
  const [loading, setLoading] = useState(false)
  const { setUser } = useUser()

  const handleLogin = () => {
    const fetchUser = async () => {
      setLoading(true)
      const response = await ApiService.login(username, password)
      setLoading(false)
      if (response.responseCode !== ResponseCode.POSITIVE) {
        setBadCredentials(true)
        return
      }
      setUser(response.data)
      setBadCredentials(false)
    }
    fetchUser()
  }

  return loading ? (
    <View style={styles.loadingWrapper}>
      <Loader />
    </View>
  ) : (
    <View style={styles.wrapper}>
      <View style={styles.form}>
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
        <TouchableOpacity style={styles.formSubmit} onPress={handleLogin}>
          <Text style={styles.formSubmitText}>LOGIN</Text>
        </TouchableOpacity>
        {badCredentials && <Text style={styles.errorText}>Incorrect username or password</Text>}
      </View>
      <View style={styles.infoBox}>
        <Text style={styles.infoBoxText}>You don't have account? </Text>
        <TouchableOpacity style={styles.infoBoxRedirect} onPress={() => setRender('Register')}>
          <Text style={styles.infoBoxRedirectText}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
