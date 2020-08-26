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


 

//  function abc() {
//   var name = document.getElementById('name').value;
//   var email = document.getElementById('email').value
//   var msg = document.getElementById('msg').value

//   if (name != 0 && email != 0 && msg != 0 ) {
//     console.log(name);
//    console.log(email);
//    console.log(msg);
//   }
//   name.value = "";
//   email.value = "";
//   msg.value = "";
  
   
//  }


