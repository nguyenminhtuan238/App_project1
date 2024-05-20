import { initializeApp } from 'firebase/app';
import {
  FirestoreSettings,
  initializeFirestore,
  memoryLocalCache,
} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import {
  apiKey,
  appId,
  authDomain,
  measurementId,
  messagingSenderId,
  projectId,
  storageBucket,
} from './global';
const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId,
  measurementId,
};

// Get a reference to the storage service, which is used to create references in your storage bucket
// Initialize Firebase
const firestoreSettings: FirestoreSettings & { useFetchStreams: boolean } = {
  experimentalAutoDetectLongPolling: true,
  localCache: memoryLocalCache(),
  useFetchStreams: false,
};

const app = initializeApp(firebaseConfig);

const fireStore = initializeFirestore(app, firestoreSettings);

const storage = getStorage();

export { storage, fireStore };
