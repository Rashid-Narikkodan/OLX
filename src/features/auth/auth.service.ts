import {auth} from '@/services/firebase'
import {
    signInWithEmailAndPassword,
    signOut,
    createUserWithEmailAndPassword,
} from 'firebase/auth';

export const SignIn=(email:string,password:string)=>{
    signInWithEmailAndPassword(auth,email,password)
}

export const SignUp=(email:string,password:string)=>{
    createUserWithEmailAndPassword(auth, email, password)
}

export const SignOut=()=>{
    signOut(auth)
}