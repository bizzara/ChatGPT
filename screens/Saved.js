import { View, Text } from 'react-native'
import React from 'react'
import { useTheme } from '../themes/ThemeProvider'

const Saved = () => {
    const { colors } = useTheme()
    return (
        <View style={{
            flex: 1,
            backgroundColor: colors.background,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={{
                color: colors.text,
            }}>Saved</Text>
        </View>
    )
}

export default Saved
