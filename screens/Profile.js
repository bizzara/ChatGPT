import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '../themes/ThemeProvider'

const Profile = () => {
    const { colors } = useTheme()
    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.background,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={{
                color: colors.text
            }}>Profile</Text>
        </View>
    )
}

export default Profile
