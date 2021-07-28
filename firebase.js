import firebase from "firebase";
import "firebase/auth";

const app = firebase.initializeApp({
    apiKey:process.env.REACT_API_SHOPPINGCART__API_KEY ,
    authDomain:process.env.REACT_API_SHOPPINGCART_AUTH_DOMAIN ,
    projectId:process.env.REACT_API_SHOPPINGCART_PROJECT_ID ,
    storageBucket:process.env.REACT_API_SHOPPINGCART_STORAGE_BUCKET ,
    messagingSenderId:process.env.REACT_API_SHOPPINGCART_MESSAGE_SENDER_ID ,
    appId:process.env.REACT_API_SHOPPINGCART_APP_ID ,
    measurementId:process.env.REACT_API_SHOPPINGCART_MEASUREMENT_ID ,
  
})

export const auth = app.auth();
export default app

