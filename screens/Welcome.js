import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, FONTS, SIZES, images } from '../constants'
import { StatusBar } from 'expo-status-bar'
import PageContainer from '../components/PageContainer'
import Button from '../components/Button'

const Welcome = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
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
                            color: COLORS.black,
                            marginVertical: 8,
                        }}
                    >
                        Welcome to ChatGPT
                    </Text>

                    <Text
                        style={{
                            ...FONTS.body3,
                            color: COLORS.black,
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
