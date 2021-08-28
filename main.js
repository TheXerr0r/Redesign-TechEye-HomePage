let toggleNavStatus = false;
let toggleNav = function() {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getbtnToggle = document.querySelector(".btn-toggle.nav");
    let getSidebarTitle = document.querySelector(".nav-sidebar span");
    let getSidebarLinks = document.querySelector(".nav-sidebar a");
    let getBody = document.querySelector("body")
    
    if (toggleNavStatus === false){
        getSidebar.style.visibility = "visible";
        getSidebarTitle.style.opacity = "0.5";
        // getBody.style.visibility = "hidden";

        let arrayLength = getSidebarLinks.length;
        for(let i = 0; i < arrayLength; i++){
            getSidebarLinks[i].style.opacity = "1";
        }

        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true){
        getSidebar.style.visibility = "hidden";
        // getSidebarUl.style.visibility = "hidden";
        getSidebarTitle.style.opacity = "0";
        getBody.style.visibility = "visible";
        // getbtnToggle.style.visibility = "visible";


        let arrayLength = getSidebarLinks.length;
        for(let i = 0; i < arrayLength; i++){
            getSidebarLinks[i].style.opacity = "0";
        }
        // getSidebar.style.visibility = "hidden";
        // getSidebarUl.style.visibility = "hidden";
        toggleNavStatus = false;
    }
}
var date = new Date();

var time = date.getUTCDate() + " | " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
document.getElementById("dateTime").innerHTML = time;
document.getElementById("dateTime2").innerHTML = time;
document.getElementById("dateTime3").innerHTML = time;
document.getElementById("dateTime4").innerHTML = time;
document.getElementById("dateTime5").innerHTML = time;
document.getElementById("dateTime6").innerHTML = time;
document.getElementById("dateTime7").innerHTML = time;
document.getElementById("dateTime8").innerHTML = time;
