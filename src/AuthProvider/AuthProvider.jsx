import { createContext, useEffect, useState } from 'react';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import app from '../FireBase/firebase.config';
import Swal from 'sweetalert2';
// import app from '../../firebase/firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      console.log(currentUser);
      setLoading(false);
      setUser(currentUser);
    });

    return () => {
      unSubscribe();
    };
  }, [auth]);

  const logOut = () => {
    setLoading(true);
    signOut(auth);
    Swal.fire({
      icon: 'success',
      title: 'Log Out successful',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const createUserByEmailAndPassword = (name, photoUrl, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {})
          .catch(error => {
            console.error(error);
          });

        setUser(result.currentUser);
        setLoading(true);

        Swal.fire({
          icon: 'success',
          title: 'Congratulation! Your account is registered successfully',
          showConfirmButton: true,
        });
      })
      .catch(error => {
        console.error(error.message);
        Swal.fire({
          icon: 'error',
          title: error.message,
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };

  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        console.log(result.user);
        Swal.fire({
          icon: 'success',
          title: 'Log In successful',
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(error => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title:
            'Something went wrong. Please provide a registered email and password.',
          showConfirmButton: true,
        });
      });
  };

  const githubProvider = new GithubAuthProvider();
  const googleProvider = new GoogleAuthProvider();

  const signInWithGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        setUser(result.user);
        setLoading(true);
        console.log(result.user);
      })
      .catch(error => {
        console.error(error.message);
      });
  };
  const signInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        setUser(result.user);
        setLoading(true);
        console.log(result.user);
      })
      .catch(error => {
        console.error(error.message);
      });
  };

  const authInfo = {
    user,
    createUserByEmailAndPassword,
    signInWithEmail,
    signInWithGithub,
    signInWithGoogle,
    logOut,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
