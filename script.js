var males = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi"];
var females = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
var daysofWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var genders = ["Male", "Female"];
var d = new Date().toString;
var m = new month().toString;
var y = new year();


function invalidDate() {
  if (d < 1 && d < 31) {
    alert("Invalid Date")
  } else if (m > 1 && m < 12) {
    alert("Invalid Month");
  }
}




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
    switch (genders) {
      case "male":
        if (daysofWeek[0] || invalidDate) {
          alert("Your name is" + males[0]);
        } else if (daysofWeek[1]|| invalidDate) {
          alert("Your name is" + males[1]);
        } else if (daysofWeek[2]|| invalidDate) {
          alert("Your name is" + males[2]);
        } else if (daysofWeek[3]|| invalidDate) {
          alert("Your name is" + males[3]);
        } else if (daysofWeek[4]|| invalidDate) {
          alert("Your name is" + males[4]);
        } else if (daysofWeek[5]|| invalidDate) {
          alert("Your name is" + males[5])
        } else if (daysofWeek[6]|| invalidDate) {
          alert("Your name is" + males[6])
        }
        break;
      case 'female':
        if (daysofWeek[0]|| invalidDate) {
          alert("Your name is" + females[0]);
          document.getElementById("output").textContent = ("Your name is" +getAkan)
        } else if (daysofWeek[1]|| invalidDate) {
          alert("Your name is" + females[1]);
          document.getElementById("output").textContent = ("Your name is" +getAkan)
                  } else if (daysofWeek[2]|| invalidDate) {
          alert("Your name is" + females[2]);
          document.getElementById("output").textContent = ("Your name is" +getAkan)
        } else if (daysofWeek[3]|| invalidDate) {
          alert("Your name is" + females[3]);
          document.getElementById("output").textContent = ("Your name is" +getAkan)
        } else if (daysofWeek[4]|| invalidDate) {
          alert("Your name is" + females[4]);
          document.getElementById("output").textContent = ("Your name is" +getAkan)
        } else if (daysofWeek[5]|| invalidDate) {
          alert("Your name is" + females[5]);
          document.getElementById("output").textContent = ("Your name is" +getAkan)
        } else if (daysofWeek[6]|| invalidDate) {
          alert("Your name is" + females[6]);
          document.getElementById("output").textContent = ("Your name is" +getAkan)
        }
        else {
          alert("Please enter a valid day")
        }
    }
    console.log("")
  }
  
