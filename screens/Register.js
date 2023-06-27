import { View, Text, Image, Alert } from 'react-native'
import React, { useCallback, useReducer, useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PageContainer from '../components/PageContainer'
import { FONTS, SIZES, images } from '../constants'
import { COLORS } from '../constants'
import Input from '../components/Input'
import Button from '../components/Button'
import { reducer } from '../utils/reducers/formReducers'
import { validateInput } from '../utils/actions/formActions'
import { getFirebaseApp } from '../utils/firebaseHelper'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { ref, child, set, getDatabase } from "firebase/database"

const initialState = {
    inputValues: {
        fullName: '',
        email: '',
        password: '',
    },
    inputValidities: {
        fullName: false,
        email: false,
        password: false,
    },
    formIsValid: false,
}

const Register = ({ navigation }) => {
    const [formState, dispatchFormState] = useReducer(reducer, initialState);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);

    const inputChangedHandler = useCallback(
        (inputId, inputValue) => {
            const result = validateInput(inputId, inputValue)
            dispatchFormState({ inputId, validationResult: result, inputValue })
        },
        [dispatchFormState]
    );

    const createUser = async (fullName,email,userId)=>{
        const userData = {
            fullName,
            email,
            userId,
            signUpDate: new Date().toISOString()
        };

        const dbRef = ref(getDatabase());
        const childRef = child(dbRef, `users/${userId}`);
        await set(childRef,userData);

        return userData;
    }

    const authHandler = async ()=>{
        const app = getFirebaseApp();
        const auth = getAuth(app);
        setIsLoading(true);

        try{
            const result = await createUserWithEmailAndPassword(
                auth,
                formState.inputValues.email,
                formState.inputValues.password,
            );

            const { uid } = result.user;

            const userData = await createUser(
                formState.inputValues.fullName,
                formState.inputValues.email,
                uid
            );

            if(userData){
                setIsLoading(false);
                navigation.navigate("Login")
            }
        }catch(error){
            const errorCode = error.code;
            let message = "Something went wrong !";
            if(errorCode === "auth/email-already-in-use"){
                message = "This email is already in use"
            }

            setError(message);
            setIsLoading(false);
        }
    };

    // Display error if something went wrong
    useEffect(() =>{
        if(error){
            Alert.alert("An error occured", error)
        }
    },[error])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <PageContainer>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginHorizontal: 22,
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
                        Welcome Back!
                    </Text>

                    <Input
                        onInputChanged={inputChangedHandler}
                        errorText={formState.inputValidities['fullName']}
                        id="fullName"
                        placeholder="Enter your full name"
                        placeholderTextColor={COLORS.black}
                    />

                    <Input
                        onInputChanged={inputChangedHandler}
                        errorText={formState.inputValidities['email']}
                        id="email"
                        placeholder="Enter your email"
                        placeholderTextColor={COLORS.black}
                    />

                    <Input
                        onInputChanged={inputChangedHandler}
                        errorText={formState.inputValidities['password']}
                        id="password"
                        placeholder="Enter your password"
                        placeholderTextColor={COLORS.black}
                        secureTextEntry
                    />

                    <Button
                        title="Register"
                        onPress={authHandler}
                        isLoading={isLoading}
                        filled
                        style={{
                            width: SIZES.width - 44,
                            marginBottom: SIZES.padding,
                            marginVertical: 8,
                        }}
                    />
                </View>
            </PageContainer>
        </SafeAreaView>
    )
}

export default Register
