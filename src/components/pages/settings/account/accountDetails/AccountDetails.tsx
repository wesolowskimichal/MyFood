import React from 'react'
import { Button, ScrollView, Text, View, Image, TouchableOpacity } from 'react-native'
import { useUser } from '../../../../../contexts/UserContext'
import { styles } from './AccountDetails.style'
import { User } from '../../../../../types/Types'

type AccountDetailsProps = {
  user: User
}

export const AccountDetails = ({ user }: AccountDetailsProps) => {
  const { setUser, setToken } = useUser()
  const handleLogOut = () => {
    setUser(null)
    setToken(null)
  }

  return (
    <>
      <View style={styles.wrapper}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.headerUsername}>{user.username}</Text>
            <Image source={{ uri: user.picture }} style={styles.userImage} />
          </View>
          <View style={styles.content}>
            <Text style={styles.contentHeader}>Personal Information:</Text>
            <View style={styles.box}>
              <Text style={styles.boxHeader}>First Name</Text>
              <Text style={styles.boxContent}>{user.first_name}</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.boxHeader}>Last Name</Text>
              <Text style={styles.boxContent}>{user.last_name}</Text>
            </View>
            <View style={styles.box}>
              <Text style={styles.boxHeader}>Email</Text>
              <Text style={styles.boxContent}>{user.email}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <TouchableOpacity onPress={handleLogOut} style={styles.logOut}>
        <Text style={styles.logOutText}>LOGOUT</Text>
      </TouchableOpacity>
    </>
  )
}
