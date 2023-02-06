import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getAnalytics } from 'firebase/analytics'
import { getPerformance } from 'firebase/performance'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const devConfig = {}

const prodConfig = {
  apiKey: 'AIzaSyBkbsKG6HgVNB25klTulLg77cFgRt7ndKg',
  authDomain: 'live-voting-competition.firebaseapp.com',
  projectId: 'live-voting-competition',
  storageBucket: 'live-voting-competition.appspot.com',
  messagingSenderId: '302793883136',
  appId: '1:302793883136:web:ca2ddf36281d01d3b922e5',
  measurementId: 'G-91Z79DYTMR',
}

export const firebaseApp = initializeApp(prodConfig)
export const auth = getAuth(firebaseApp)
export const firestore = getFirestore(firebaseApp)
export const storage = getStorage(firebaseApp)
export const analytics = getAnalytics(firebaseApp)
export const performance = getPerformance(firebaseApp)
