let userName = document.getElementById("userName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let emailLog = document.getElementById('emailLog');
let passwordLog = document.getElementById('passwordLog');
let btnSignup = document.getElementById("btnSignup");
let UserData;
let storage ="";
let successMessage = document.getElementById('success');
let errorMassege = document.getElementById("errorMassege");
// Check Lockal Storage 
if (localStorage.getItem("userData") == null) {
  UserData = [];
} else {
  UserData = JSON.parse(localStorage.getItem("userData"));
}

    
//  Push Data In Array && Save Data In Local Storage 
function data() {
  if(validSignup()){
    let dataValue = {
      userName: userName.value,
      email: email.value,
      password: password.value,
    };
    UserData.push(dataValue);
    localStorage.setItem("userData", JSON.stringify(UserData));
    successMessage.innerHTML= "success"
  }else{
    successMessage.innerHTML= "Sorry"; 
  }
}

function dataValueLogin (){
  if(valid() ){
    for (let i=0 ;i < UserData.length; i++){
      if (emailLog.value == UserData[i].email && passwordLog.value == UserData[i].password){
        window.location.href = "./home.html";
        localStorage.setItem('userName' , JSON.stringify(UserData[i].userName));              
        return true;
      }else{
        errorMassege.innerHTML = "Incorrect username or password.";
        errorMassege.classList.add('py-4')
      }
    }
    console.log("Is Email OR Password")
  }
}
  // Validation Log In
  function valid(){
   if(emailLog.value == "" || passwordLog.value == "" )   {
       return false
   }else{
       return true
   }
  }
// check Valu Befor Signup
function validSignup(){
  if(email.value == "" || password.value == "" || userName.value == "" )   {
    return false
  }else{
    return true
  }
}
   
//  Display Name In Home Page
  document.getElementById('name').innerHTML = JSON.parse(localStorage.getItem('userName'));


function logout (){
  localStorage.removeItem('userName');
  location.href = './index.html'
}