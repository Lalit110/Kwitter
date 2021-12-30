var firebaseConfig = {
      apiKey: "AIzaSyB30PTvfq4gXUfbRJzYw7z4tedHmCTdtmI",
      authDomain: "kwitter-238fd.firebaseapp.com",
      databaseURL: "https://kwitter-238fd-default-rtdb.firebaseio.com",
      projectId: "kwitter-238fd",
      storageBucket: "kwitter-238fd.appspot.com",
      messagingSenderId: "908478436724",
      appId: "1:908478436724:web:a6c8074b582f8ca4808821",
      measurementId: "G-69W6KL3GYX"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!!";

    function addroom(){

      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "Adding Room Name"
      });
      localStorage.setItem("room_name" , room_name);
      window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name : " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToroom(this.id)'> # " + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToroom(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logout(){

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}