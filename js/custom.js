// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

function toggleMenu() {
    var menuToggle = document.getElementById("dropmenu");
    var menudrop = document.getElementsByClassName("dropmenu-item");

    //if mousse on menu
    menuToggle.onmouseover = function() {
        menudrop[0].style.display = "block";
    }

    //if mouse out menu
    menuToggle.onmouseout = function() {
        menudrop[0].style.display = "none";
    }
}

toggleMenu();