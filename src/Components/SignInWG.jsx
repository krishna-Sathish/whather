import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCoLWxE8K4HhmDaOi3AsdQm6hRKZ_EpEgY",
    authDomain: "goodle-sign-project.firebaseapp.com",
    projectId: "goodle-sign-project",
    storageBucket: "goodle-sign-project.appspot.com",
    messagingSenderId: "890341075780",
    appId: "1:890341075780:web:689470607ee83bf050c511"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const SignInWG = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (person) => {
            setUser(person ? person : null);
        });
        return () => unsubscribe(); 
    }, []);

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Error during sign-in:", error);
        }
    };

    return (
        <center className='mt-5 '>
            {user ? (
                <div>
                    <button className='btn btn-danger' onClick={()=>auth.signOut()}>Sign Out</button>
                </div>
            ) : (
                <>
                <h1>Welcome to my page</h1>
                <form>
          <div class="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control w-50" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
    <div className="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" className="form-control w-50" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
 </form>
     <p>or</p>
                <button onClick={signInWithGoogle} className="btn btn-primary">
                    Sign In With Google
                </button>
                </>
            )}
        </center>
    );
};

export default SignInWG;
