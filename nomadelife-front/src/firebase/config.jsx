
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDDhgOpA3n37_0lUtfF7W1P9i1arC8iKxc",
  authDomain: "nomadelife-rmvf.firebaseapp.com",
  projectId: "nomadelife-rmvf",
  storageBucket: "nomadelife-rmvf.appspot.com",
  messagingSenderId: "1041688180199",
  appId: "1:1041688180199:web:cff00c62e6c87fe912b942",
  measurementId: "G-ZT1SBR598K"
};


const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export {db, analytics}