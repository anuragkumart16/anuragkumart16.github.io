 // reference to dom elements
 const nav=document.querySelector("#nav");
 const img=document.querySelector("#icon");
 const navdivleft = document.querySelector("#navdiv-left");
 const navdivright = document.querySelector("#navdiv-right")
 const home= document.querySelector("#home");
 const projects= document.querySelector("#projects");
 const contact= document.querySelector("#contact");
 
//  bussiness
var a=0;
 
 
 // eventlisteners
 img.addEventListener(click,toggle);
 
 
 
 // functions
 function toggle(){
    if (a==0){
        nav.style.display="block";
        navdivleft.style.display="none";
        navdivright.classList.add("navmobile");
        a=1;
    }
    else if(a==1) {
        nav.style.display="flex";
        navdivleft.style.display="block";
        navdivright.classList.remove("navmobile");
        a=0;
    }
 }