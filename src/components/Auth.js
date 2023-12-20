import { useState } from "react";
import { auth, googleProvider } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";



function Auth() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const singUp = async () => {
        await createUserWithEmailAndPassword(auth, email, password);
    }
    const singInWithGoogle = async () =>
        await signInWithPopup(auth, googleProvider);
    const logOut = async () => {
        await signOut(auth);
    }
    return (
        <div>
            <span>Usuario: {auth?.currentUser?.email} </span>
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={singUp}>Registrate</button>
            <button onClick={singInWithGoogle}>Ingresar con Google</button>
            <button onClick={logOut}>LogOut </button>
        </div>
    )
}

export default Auth;