
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
database.ref("switch").on("value", function(snapshot) {
	texto.html(snapshot.val());
});

desliga.on("click", function() {
	database.ref("/switch").set(0);
});
liga.on("click", function() {
	database.ref("/switch").set(1);
});
