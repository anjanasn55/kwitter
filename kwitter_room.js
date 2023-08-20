
var firebaseConfig = {
      apiKey: "AIzaSyBAqFPnLIRxXLEGzA4Y0qc9Y-pfpgqa7rg",
      authDomain: "kwitter-cd955.firebaseapp.com",
      databaseURL: "https://kwitter-cd955-default-rtdb.firebaseio.com",
      projectId: "kwitter-cd955",
      storageBucket: "kwitter-cd955.appspot.com",
      messagingSenderId: "516710559313",
      appId: "1:516710559313:web:814d4fae50428ed724d270"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");


    document.getElementById("user_name").innerHTML="Welcome" + user_name + "!";

    function addRoom()
    {
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name" , room_name);
      window.location="kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
 console.log("room name-" + room_name);
		row="<div class='room_name' id="+room_name+"onclick='redirectToRoomName(this.id)'>#"+room_name+"</div> <hr> ";
      });
      });
      }
getData();
function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name" , name);
 window.location="kwitter_page.html";
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");  
}
