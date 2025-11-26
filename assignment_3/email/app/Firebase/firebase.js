// Firebase init and helpers for client-side auth
import { initializeApp, getApps } from "firebase/app"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth"
import { getFirestore, doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBgmh1_zDylH67OUqitqg02GSx0zwGrvCg",
  authDomain: "assignment-3-f95cf.firebaseapp.com",
  projectId: "assignment-3-f95cf",
  storageBucket: "assignment-3-f95cf.firebasestorage.app",
  messagingSenderId: "890621885808",
  appId: "1:890621885808:web:1faa1f7ee0126c8125a3b5",
  measurementId: "G-QJYV3TYPMV",
}

// Prevent re-initializing the app during hot-reload
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0]
const auth = getAuth(app)
const db = getFirestore(app)

// Export auth instance plus small helper wrappers
export { app, auth }

// Register a new user
export async function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password)
}

// Login an existing user
export async function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password)
}

// Set display name for the current user
export async function setDisplayName(name) {
  if (!auth.currentUser) throw new Error("No user is signed in")
  return updateProfile(auth.currentUser, { displayName: name })
}

// Create a user document in Firestore with additional data
export async function createUserDocument(user, additional = {}) {
  if (!user || !user.uid) throw new Error("Invalid user object")
  const ref = doc(db, "users", user.uid)
  const snapshot = await getDoc(ref)
  if (!snapshot.exists()) {
    const data = {
      uid: user.uid,
      email: user.email || null,
      createdAt: serverTimestamp(),
      ...additional,
    }
    await setDoc(ref, data)
    return data
  }
  return snapshot.data()
}

export async function getUserDocument(uid) {
  if (!uid) return null
  const ref = doc(db, "users", uid)
  const snap = await getDoc(ref)
  return snap.exists() ? snap.data() : null
}

// Example usage in your page:
//   const userCred = await signUp(email, password)
//   await setDisplayName(name)