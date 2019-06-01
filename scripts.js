
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBSKqaVZjlZIHzNAm7rtwknNhzFFJE1GMQ",
  authDomain: "first-project-cc479.firebaseapp.com",
  databaseURL: "https://first-project-cc479.firebaseio.com",
  projectId: "first-project-cc479",
  storageBucket: "first-project-cc479.appspot.com",
  messagingSenderId: "124734962933"
};
firebase.initializeApp(config);

var messagesRef = firebase.database().ref('users');


document.getElementById('formulaire').addEventListener('submit', submitForm);
// function getInputVal(id){
//     return document.getElementById(id).value;
//   }
function submitForm(e) {
  e.preventDefault();
  // Get values
  var firstname = document.getElementById("first-name").value;
  var lastname = document.getElementById('last-name').value;
  var age = document.getElementById('age').value;
  var email = document.getElementById('email').value;

  saveMessage(firstname, lastname, age, email);
}
// var messagesRef = firebase.database().ref('first-name');
// var messagesRef = firebase.database().ref('last-name');
// var messagesRef = firebase.database().ref('age');
// var messagesRef = firebase.database().ref('email');

// Save message to firebase
function saveMessage(firstname, lastname, age, email) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    prenom: firstname,
    nom: lastname,
    age: age,
    email: email
  });
}
  // saveMessage(firstname,lastname,age, email);

//   Show alert
// document.querySelector('.alert').style.display = 'block';
// // Hide alert after 3 seconds
// setTimeout(function(){
//   document.querySelector('.alert').style.display = 'none';
// },3000);
//   document.getElementById('formulaire').reset();

