import {auth} from './firebase';

// for creating the account
export const doCreateUserWithEmailAndPassword = (email, password) => {
    auth.createUserAndRetrieveDataWithEmailAndPassword(email, password);
}

// login
export const doSignUserWIthEmailAndPassword = (email,password) => {
    auth.signInWithEmailAndPassword(email, password);
}

// signout
export const doSignOut = ()=> {
    auth.signOut();
}

// resetting the password
export const doPasswordReset = (email)=> {
    auth.sendPasswordResetEmail(email);
}

export const doPasswordUpdate = (password) => {
    auth.currentUser.updatePassword(password);
}