import firebase from 'firebase'

// Firebase web 用の config
const config = {
    apiKey: "AIzaSyAtTAU2pW2CS9A9STpsQOQAzVNG2YEPW7c",
    authDomain: "hellovegetable-1c1f1.firebaseapp.com",
    databaseURL: "https://hellovegetable-1c1f1.firebaseio.com",
    projectId: "hellovegetable-1c1f1",
    storageBucket: "hellovegetable-1c1f1.appspot.com",
    messagingSenderId: "453374632415",
    appId: "1:453374632415:web:07e7c5986cea3ac770a46a",
    measurementId: "G-G656MF9K6R"
};

firebase.initializeApp(config)

// 認証時のコールバック
firebase.auth().onAuthStateChanged(user => {
  if (user != null) {
    console.log('We are authenticated now!')
  }
})
// ユーザ登録
// メールアドレスとパスワードを登録
function signup(email, password){
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(user) {
      if (user) {
        console.log("Success to Signup!")
      }
    });
  }
  
  // 認証
  function login(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(response){
      alert("Login Success!");
    })
    .catch(function(error) {
      alert(error.message);
    });
  }
