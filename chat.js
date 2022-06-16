// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyD9BsbWHTIIkdy4BNHBYdLLnSOrPtvndYc",
    authDomain: "project-no-100.firebaseapp.com",
    databaseURL: "https://project-no-100-default-rtdb.firebaseio.com",
    projectId: "project-no-100",
    storageBucket: "project-no-100.appspot.com",
    messagingSenderId: "272647841349",
    appId: "1:272647841349:web:65b67b36a50f8180bfa52c"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}



