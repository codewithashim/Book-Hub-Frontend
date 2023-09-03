import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId,
  apiKey: "AIzaSyCdpD7ICg5jwJXKkCOofT51v5cJEHMfkHU",
  authDomain: "book-hub-cf014.firebaseapp.com",
  projectId: "book-hub-cf014",
  storageBucket: "book-hub-cf014.appspot.com",
  messagingSenderId: "909190244413",
  appId: "1:909190244413:web:7d6a398f8be1d209456254",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
