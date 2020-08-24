 var date = document.getElementById('date');
 var y = new Date;
 var year = y.getFullYear()
 date.innerHTML = year


 function changecolor(){
  var a = document.getElementsByClassName('nav-link');
  for (let i = 0; i < a.length; i++) {
    a[i].onclick = function(){
      for (let i = 0; i < a.length; i++) {
        if (a[i].classList.contains("active")) {
          a[i].classList.remove("active")
        }
      }
      a[i].classList.add("active")
    }
 }
}