// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const getFirebaseApp = () => {
    const firebaseConfig = {
        apiKey: 'AIzaSyBwYRO37_PzU_9Dks9iPL2xmFyJapGd-JY',
        authDomain: 'chat-gpt-2-1629b.firebaseapp.com',
        projectId: 'chat-gpt-2-1629b',
        storageBucket: 'chat-gpt-2-1629b.appspot.com',
        messagingSenderId: '1099289868444',
        appId: '1:1099289868444:web:b70d2520a7fd20283f1559',
    }

    // Initialize Firebase
    return initializeApp(firebaseConfig)
}
