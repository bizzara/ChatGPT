import {
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    StyleSheet,
} from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants'

const Button = (props) => {
    const filledBgColor = props.color || COLORS.primary
    const outlinedBgColor = COLORS.white
    const bgColor = props.filled ? filledBgColor : outlinedBgColor
    const textColor = props.filled
        ? COLORS.white || props.textColor
        : COLORS.primary || props.textColor

    const isLoading = props.isLoading || false
    return (
        <TouchableOpacity
            onPress={props.onPress}
            style={{
                ...styles.btn,
                ...{ backgroundColor: bgColor },
                ...props.style,
            }}
        >
            {isLoading && isLoading == true ? (
                <ActivityIndicator size="small" color={COLORS.white} />
            ) : (
                <Text
                    style={{
                        ...FONTS.body2,
                        ...{ color: textColor },
                    }}
                >
                    {props.title}
                </Text>
            )}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        paddingHorizontal: SIZES.padding,
        paddingVertical: SIZES.padding,
        borderColor: COLORS.primary,
        borderWidth: 2,
        borderRadius: SIZES.padding,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default Button
