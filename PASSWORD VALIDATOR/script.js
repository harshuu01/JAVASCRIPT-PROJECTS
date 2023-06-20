function checkPassword(){
    let password= document.getElementById("password").value;
    let confirmPassword=document.getElementById("confirm-password").value;
    console.log("Password", password , '\n',"Confirm Password", '\n',confirmPassword);
    let message =document.getElementById("message");
    if(password !=0){
        if(password == confirmPassword ){
            message.textContent="Password Match";
            message.style.backgroundColor= "#1dcd59"
        }
        else{
            message.textContent = "Password don't match";
            message.style.backgroundColor = "#ff4d4d";
        }
    }
    else{
        alert("Password caan't be empty!");
        message.textContent=" ";
    }
}