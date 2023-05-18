import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { auth } from "./firebase";

const router = useRouter();

export const firebaseCreateUser = (email, password, router) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            successMessage("Account created 🎉");
            router.push("/login");
        })
        .catch((error) => {
            console.error(error);
            errorMessage("Account creation declined ❌");
        });
};

export const firebaseLoginUser = (email, password, router) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            successMessage("Authentication successful 🎉");
            router.push("/dashboard");
        })
        .catch((error) => {
            console.error(error);
            errorMessage("Incorrect Email/Password ❌");
        });
};

export const firebaseLogOut = (router) => {
    signOut(auth)
        .then(() => {
            successMessage("Logout successful! 🎉");
            router.push("/");
        })
        .catch((error) => {
            errorMessage("Couldn't sign out ❌");
        });
};