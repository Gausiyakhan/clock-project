const clock = document.getElementById("clock");
// syntax

// setInterval(function(){},1000)
setInterval(function () {
  let date = new Date();
  //   console.log(date.toLocaleTimeString);
  clock.innerHTML = date.toDateString() + " "+ date.toLocaleTimeString();
}, 1000);
