// JavaScript Document
function ckeckLogin()
 {
   var us_name = document.getElementById("username").value,
	us_pass = document.getElementById("password").value ;
   if( us_name =='admin' && us_pass == '123' )
	  {
		  // user redirect 
		  window.location = 'https://www.google.com';
	  }
	  else
	  {
		  document.getElementById("errMsg").innerHTML = "Invalid username or password";
	  }
 }