
// Your web app's Firebase configurationl
var firebaseConfig = {
      apiKey: "AIzaSyC05u6ViV1v2qScNQtfhgvivoGUxN4y4Rg",
      authDomain: "classtest-6d40a.firebaseapp.com",
      projectId: "classtest-6d40a",
      storageBucket: "classtest-6d40a.appspot.com",
      messagingSenderId: "663994489674",
      appId: "1:663994489674:web:a5690d718805bbd37cbfb3",
      measurementId: "G-QM37D06KS6"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
