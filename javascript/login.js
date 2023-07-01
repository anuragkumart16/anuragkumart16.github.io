function auth(){
    username=document.querySelector("#username").value;
    password=document.querySelector("#password").value;
    if (username=="anurag" || password=="anurag"){
        alert("logged in");
    }
    else if (username=="polak" || password=="polak"){
        alert("logged in");
    }
    else{
        alert("Invalid User, Check Username And Password.")
    }
}