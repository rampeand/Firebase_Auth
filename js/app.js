(function () {
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyACvce20Ozr28TInecNWN7yC3PXJkdmN9k",
    authDomain: "authtest-762b1.firebaseapp.com",
    databaseURL: "https://authtest-762b1.firebaseio.com",
    storageBucket: "authtest-762b1.appspot.com",
    messagingSenderId: "499424038377"
  };
  firebase.initializeApp(config);

  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');

  //login event

  btnLogin.addEventListener('click', e => {
    //get email and pwd
    const email = txtEmail.value;
    const password = txtPassword.value;
    const auth = firebase.auth();

    //sign in

    const promise = auth.signInWithEmailAndPassword(email, password);

    promise.catch(e=> console.log(e.message));
  });

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      console.log(firebaseUser);
    } else {
      console.log('user not logged in');
    }
  });

}());