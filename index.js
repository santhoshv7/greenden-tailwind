//selecting sidenav, menuicon
var sidenav = document.getElementById("sidenav");
var menuicon = document.getElementById("menuicon");

menuicon.addEventListener("click", function(){
    sidenav.style.right = "0";
})

var closeNav = document.getElementById("close-nav");

closeNav.addEventListener("click", function(){
    sidenav.style.right = "-50%";
})