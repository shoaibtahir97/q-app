import { initializeApp } from "firebase/app";
import { getAuth, signOut } from "firebase/auth";
import { setDoc, doc, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAYN5HBiIyXTYDI-2z4X9SYwt38wVN5_Gk",
    authDomain: "q-app-b4bc5.firebaseapp.com",
    projectId: "q-app-b4bc5",
    storageBucket: "q-app-b4bc5.appspot.com",
    messagingSenderId: "959346772788",
    appId: "1:959346772788:web:72ac1dc9631b7daf457361"
};

const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);

const db = getFirestore(app)

async function addUserToDB(userInfo) {
    console.log(userInfo);
    let userName = userInfo.user.displayName
    let email = userInfo.user.email
    let uid = userInfo.user.uid
    return setDoc(doc(db, "users", uid), { email, userName })
}

export {
    addUserToDB

}