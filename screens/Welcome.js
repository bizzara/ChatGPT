import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, FONTS, SIZES, images } from '../constants'
import { StatusBar } from 'expo-status-bar'
import PageContainer from '../components/PageContainer'
import Button from '../components/Button'
import { useTheme } from "../themes/ThemeProvider"

const Welcome = ({ navigation }) => {
    const { colors } = useTheme()
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
            <StatusBar style="light" />
            <PageContainer>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Image
                        source={images.logo}
                        style={{
                            height: 120,
                            width: 120,
                            marginBottom: 22,
                        }}
                    />

                    <Text
                        style={{
                            ...FONTS.h4,
                            color: colors.text,
                            marginVertical: 8,
                        }}
                    >
                        Welcome to ChatGPT
                    </Text>

                    <Text
                        style={{
                            ...FONTS.body3,
                            color: colors.text,
                            marginBottom: 36,
                        }}
                    >
                        Pick any options to continue
                    </Text>

                    <Button
                        title="Log in"
                        filled
                        onPress={() => navigation.navigate('Login')}
                        style={{
                            width: SIZES.width - 44,
                            marginBottom: SIZES.padding,
                        }}
                    />

                    <Button
                        title="Register"
                        onPress={() => navigation.navigate('Register')}
                        style={{
                            width: SIZES.width - 44,
                            marginBottom: SIZES.padding,
                            backgroundColor: 'transparent',
                            borderColor: COLORS.primary,
                        }}
                    />
                </View>
            </PageContainer>
        </SafeAreaView>
    )
}

export default Welcome
