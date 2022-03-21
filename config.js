import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCYBkcx1m_tcOv7Rkt1f_SUvBhf4R01IDU",
  authDomain: "e-library-7b06b.firebaseapp.com",
  databaseURL: "https://e-library-7b06b-default-rtdb.firebaseio.com",
  projectId: "e-library-7b06b",
  storageBucket: "e-library-7b06b.appspot.com",
  messagingSenderId: "37174693988",
  appId: "1:37174693988:web:ebbe682b71188a92328f71"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
