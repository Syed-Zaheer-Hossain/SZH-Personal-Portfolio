
// Author:- Syed Zaheer Hossain

let tagli=document.getElementsByTagName('li');
let navbar=document.getElementById('navbar');
let ham=document.getElementById('ham');
let close=document.getElementById('close');

let home=document.getElementById('home').offsetHeight;
let about=document.getElementById('about').offsetHeight;
let prof=document.getElementById('prof').offsetHeight;
let proj=document.getElementById('project').offsetHeight;
let hire=document.getElementById('hire').offsetHeight;

let ah=home+about;
let pfh=ah+prof;
let pjh=pfh+proj;
let hh=pjh+hire;

ham.addEventListener("click",()=>{
    navbar.classList.add('open');
});


close.addEventListener("click",()=>{
    navbar.classList.remove('open');
})

tagli[0].addEventListener("click" , ()=>{
        tagli[0].classList.add("inactive");
        tagli[1].classList.add("inactive");
        tagli[2].classList.add("inactive");
        tagli[3].classList.add("inactive");
        tagli[4].classList.add("inactive");
    
        tagli[0].classList.remove("inactive");

        navbar.classList.remove('navbar-light');
    })

window.addEventListener("scroll", ()=>{
    // tagli[0].classList.add("inactive");
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 && document.documentElement.scrollTop < home*0.7){
        tagli[0].classList.add("inactive");
        tagli[1].classList.add("inactive");
        tagli[2].classList.add("inactive");
        tagli[3].classList.add("inactive");
        tagli[4].classList.add("inactive");

        tagli[0].classList.remove("inactive");

        navbar.classList.remove('navbar-light');
    }
    else if(document.body.scrollTop > 0.7*home || document.documentElement.scrollTop > 0.9*home && document.documentElement.scrollTop <0.9*ah){
        tagli[0].classList.add("inactive");
        tagli[1].classList.add("inactive");
        tagli[2].classList.add("inactive");
        tagli[3].classList.add("inactive");
        tagli[4].classList.add("inactive");

        tagli[1].classList.remove("inactive");

        navbar.classList.add('navbar-light');
    }
    else if(document.body.scrollTop > 0.9*ah || document.documentElement.scrollTop > 0.9*ah && document.documentElement.scrollTop < 0.9*pfh){
        tagli[0].classList.add("inactive");
        tagli[1].classList.add("inactive");
        tagli[2].classList.add("inactive");
        tagli[3].classList.add("inactive");
        tagli[4].classList.add("inactive");

        tagli[2].classList.remove("inactive");

        navbar.classList.add('navbar-light');
    }
    else if(document.body.scrollTop > 0.9*pfh || document.documentElement.scrollTop > 0.9*pfh && document.documentElement.scrollTop < 0.9*pjh){
        tagli[0].classList.add("inactive");
        tagli[1].classList.add("inactive");
        tagli[2].classList.add("inactive");
        tagli[3].classList.add("inactive");
        tagli[4].classList.add("inactive");

        tagli[3].classList.remove("inactive");

        navbar.classList.add('navbar-light');
    }
    else if(document.body.scrollTop > 0.9*pjh || document.documentElement.scrollTop > 0.9*pjh && document.documentElement.scrollTop < .9*hh){
        tagli[0].classList.add("inactive");
        tagli[1].classList.add("inactive");
        tagli[2].classList.add("inactive");
        tagli[3].classList.add("inactive");
        tagli[4].classList.add("inactive");

        tagli[4].classList.remove("inactive");

        navbar.classList.add('navbar-light');
    }
})