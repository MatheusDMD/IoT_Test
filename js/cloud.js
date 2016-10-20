
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBc67sGk43uD07ko0MYIVw4Yz0iFwGwDY4",
  authDomain: "iot-test-18feb.firebaseapp.com",
  databaseURL: "https://iot-test-18feb.firebaseio.com",
  storageBucket: "iot-test-18feb.appspot.com",
  messagingSenderId: "466723870231"
};
firebase.initializeApp(config);

var database = firebase.database();
var texto = $("#meu-texto");
var liga = $("#liga");
var desliga = $("#desliga");
var my_switch = $("#myonoffswitch");

switchs.on("click", function() {
  if(database.ref("/switch") == 0){
    database.ref("/switch").set(1);
    my_switch.checked = true;
  } else {
    database.ref("/switch").set(0);
    my_switch.checked = false;
  }
});

function update_switch(){
  if(database.ref("/switch") == 1){
    my_switch.checked == true;
  } else {
    my_switch.checked == false;
  }
};

function startTimer() {
    setInterval(update_switch, 500);
};

database.ref("switch").on("value", function(snapshot) {
	texto.html(snapshot.val());
});

desliga.on("click", function() {
	database.ref("/switch").set(0);
});
liga.on("click", function() {
	database.ref("/switch").set(1);
});
