import { KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'

const PageContainer = (props) => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            {props.children}
        </KeyboardAvoidingView>
    )
}

export default PageContainer
