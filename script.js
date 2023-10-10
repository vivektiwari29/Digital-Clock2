


let datee = new Date()
hour.innerHTML = datee.getHours()
minute.innerHTML = datee.getMinutes()



setInterval(() => {

  let date = new Date()
  second.innerHTML = date.getSeconds()
}, 1000)


let date = new Date()
let a = date.getHours()

if (a > 12) {
  ampm.innerHTML = "PM"
}
else {
  ampm.innerHTML = "AM"
}

const changeformat = () => {
  if (a > 12) {

    hour.innerHTML = a - 12
    a = a - 12
    document.getElementById("ampm").style.display = "flex"


  }
  else {
    hour.innerHTML = a + 12
    a = a + 12
    document.getElementById("ampm").style.display = "none"


  }
}

function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");

  if (checkBox.checked == true) {
    document.body.style.backgroundColor = "#1a1e23"
  } else {
    document.body.style.background = "white"
  }

}