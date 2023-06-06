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
 
// subfuctions
function toggle_after (){
    nav.style.display="block";
    navdivleft.style.display="none";
    navdivright.classList.add("navmobile");
    home.style.display="block";
    projects.style.display="block";
    contact.style.display="block";
    nav.style.transition="all 2s";
}
function toggle_before(){
    nav.style.display="flex";
    navdivleft.style.display="block";
    navdivright.classList.remove("navmobile");
    home.style.display="none";
    projects.style.display="none";
    contact.style.display="none";
}
 
 // functions
 function toggle(){
    if (a==0){
        toggle_after()
        a=1;
    }
    else if(a==1) {
        toggle_before()
        a=0;
    }
 }