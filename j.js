//top right date
var now = new Date();
var datetime = now.toDateString();
datetime = datetime.substring(0,3)+ "," +datetime.substring(3,datetime.length-4);
document.getElementById("datetime").innerHTML = datetime;