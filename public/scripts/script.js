
window.addEventListener('scroll', function(e){
  var distanceY = window.pageYOffset || document.documentElement.scrollTop,
  fadeOn = 1,
  shrinkOn = 100,
  header = document.getElementById("header");

  if (distanceY > fadeOn) {
    header.className = "hiding";
  } else {
    header.className = "";
  }
  if (distanceY > shrinkOn) {
    header.className = "smaller";
  }
});
