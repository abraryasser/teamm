function validate(){

    var userName = document.getElementById("username").value;   
    var email = document.getElementById("email").value;  
    var password = document.getElementById("password").value;   
    var confirmPassword = document.getElementById("confirmpassword").value; 
    var lastname =document.getElementById("lastname").value;
    var   phone = document.getElementById("phone").value;
    var errorMessage = document.getElementById("errorMessage");
    
    
    errorMessage.style.padding= "10px";
    errorMessage.style.backgroundColor= "#4543AE";
    errorMessage.style.color ="#fff";
    errorMessage.style.textAlign="center";
    errorMessage.style.transition= "all .5s ease-in";
    errorMessage.style.marginBottom="10px";
    
    
    
    var text = ""; 
    
    if( email=="" && userName=="" && password==""&& confirmPassword==""&&lastname==""){
    
        text= "please Insert Valid Data";
        errorMessage.innerHTML = text;
        
        return false;
    }
    else if(userName.length <5 || userName.length >15){
        text ="please Insert 5-15 character in username";
        errorMessage.innerHTML =text;
        return false;
    }
    else if(lastname.length <5 || lastname.length >15){
        text ="please Insert 5-15 character in lastname";
        errorMessage.innerHTML =text;
        return false;
    }
    
    else if(email.indexOf("@")==-1){
        text= "Please Enter Valid Email";
        errorMessage.innerHTML =text;
        return false;
    }else if (password.length<8){
        text ="please Insert atleast 8 character in password";
        errorMessage.innerHTML =text;
        return false;
    }
    
    else if(password != confirmPassword){
        text= "please Matched password";
        errorMessage.innerHTML =text;
        return false;
    }
    else{
       
        return true;
    }
    
      

    }



