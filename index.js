// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {  apiKey: "AIzaSyAzwCZaugbkY_hu4S0bySflSbZDeQaV3Xc",
  authDomain: "kc326-2c5d9.firebaseapp.com",
  databaseURL: "https://kc326-2c5d9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "kc326-2c5d9",
  storageBucket: "kc326-2c5d9.appspot.com",
  messagingSenderId: "448987432392",
  appId: "1:448987432392:web:d415e6467de8d2d02aecfd",
  measurementId: "G-N3RQNXTXLB"
};

  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

send.addEventListener('click',(e) =>{ 
Sends();
});
read.addEventListener('click',(e) =>{ 
Getval();
});

function Sends(){
    Number = parseFloat(document.getElementById('Number').value);
const db = getDatabase();
  set(ref(db, 'Number/'), {
    Value : Number
  });
}

function Getval(){
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Number` + '/Value')).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        document.getElementById('val').innerHTML = "Number/Value="+snapshot.val();
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
}
