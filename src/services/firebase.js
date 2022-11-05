// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2Ri-3yn3ZOeeZayg5j4aWXHQ99Qpx82U",
  authDomain: "react-js-final.firebaseapp.com",
  projectId: "react-js-final",
  storageBucket: "react-js-final.appspot.com",
  messagingSenderId: "601764676555",
  appId: "1:601764676555:web:c143b4b8b2e888277fec4e"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(FirebaseApp);

export async function getBooks() {
  const collectionRef = collection(db, "libros");
  let results = await getDocs(collectionRef);
  let dataLibros = results.docs.map(doc => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  })
  return dataLibros;
}

export async function getUnLibro(idParams) {
  try {
    const docRef = doc(db, "libros", idParams);
    const docResult = await getDoc(docRef);

    return { id: docResult.id, ...docResult.data() };
  } catch (error) {

  }
}

export async function getBookByCategoria(idCategoryParams) {
  const collectionRef = collection(db, "libros");
  const queryCategoria = query(collectionRef, where("categoria", "==", idCategoryParams));
  let results = await getDocs(queryCategoria);

  let dataLibros = results.docs.map(doc => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  })
  return dataLibros;
}


export default FirebaseApp;