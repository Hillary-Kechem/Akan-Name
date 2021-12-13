var males= ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi"];
var females = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var daysofWeek = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var genders = ["Male","Female"];

//Find gender values
function getGender() {
  var gender = document.getElementsByName("genders");
  if (genders[0].checked == true) {
    var gender = "male";
  } else if (genders[1].checked == true) {
    var gender = "female";
  } else {
    alert("Invalid. Must choose")
  }
}

function getAkan() {
  var genders = document.getElementById("genders");
  switch(genders){
    case "male":
  if (daysofWeek[0]) {
    alert("Your name is" +males[0]);
  } 
  else if(daysofWeek[1]) {
    alert("Your name is" +males[1]);
  } 
  else if(daysofWeek[2]) {
    alert("Your name is" +males[2]);
  }
  else if(daysofWeek[3]) {
    alert("Your name is" +males[3]);
  }
  else if(daysofWeek[4]) {
    alert("Your name is" +males[4]);
  }
  else if(daysofWeek[5]) {
    alert("Your name is" +males[5])
  }
  else if(daysofWeek[6]) {
    alert("Your name is" +males[6])
  }
  break;
  case 'female':
    if(daysofWeek[0]){
      alert("Your name is" +females[0]);
    }
    else if(daysofWeek[1]){
      alert("Your name is" +females[1]);
    }
    else if(daysofWeek[2]){
      alert("Your name is" +females[2]);
    }
    else if(daysofWeek[3]){
      alert("Your name is" +females[3]);
    } 
    else if(daysofWeek[4]){
      alert("Your name is" +females[4]);
    }
    else if(daysofWeek[5]) {
      alert("Your name is" +females[5]);
    }
    else if(daysofWeek[6]){
      alert("Your name is" +females[6]);
    }
}