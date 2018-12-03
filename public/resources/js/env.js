// Initialize Firebase
let config = {
    apiKey: "AIzaSyAhG0aDJpkD9L5g_BKJZfmgS0LUW62OIhM",
    authDomain: "falacampinas-99b7a.firebaseapp.com",
    databaseURL: "https://falacampinas-99b7a.firebaseio.com",
    projectId: "falacampinas-99b7a",
    storageBucket: "falacampinas-99b7a.appspot.com",
    messagingSenderId: "936410951012"
};
firebase.initializeApp(config);
let db = firebase.firestore();


function verificarUsuarioLogado() {
    let user = firebase.auth().currentUser;

    if (user)
        return user;
    else
        return null;

}

let currentUser;
firebase
    .auth()
    .onAuthStateChanged(function (user) {
        currentUser = user;
        console.log(currentUser);
    });
