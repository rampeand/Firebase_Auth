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

  //logout event
  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });

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
      console.log(firebaseUser.email);
      btnLogout.classList.remove('hide');
      btnLogin.classList.add('hide');

    } else {
      console.log('user not logged in');
      btnLogout.classList.add('hide');
      btnLogin.classList.remove('hide');
    }
  });    

}());

 function onSuccess(googleUser) {
      var profile = googleUser.getBasicProfile();
      console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
      console.log("ID: " + profile.getId()); // Don't send this directly to your server!
        console.log('Full Name: ' + profile.getName());
        console.log('Given Name: ' + profile.getGivenName());
        console.log('Family Name: ' + profile.getFamilyName());
        console.log("Image URL: " + profile.getImageUrl());
        console.log("Email: " + profile.getEmail());
    }
    function onFailure(error) {
      console.log(error);
    }
    function renderButton() {
      gapi.signin2.render('my-signin2', {
        'scope': 'profile email',
        'width': '240',
        'height': '50',
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSuccess,
        'onfailure': onFailure
      });
    }