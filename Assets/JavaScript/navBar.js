var hideButton = document.getElementById("nav-hide");
var navLinks = document.getElementsByClassName("nav-bar");
hideButton.addEventListener("click", showHide);
var linksHidden = true;

function showHide(){
    if(linksHidden)
        showLinks();
    else
        hideLinks();
}

function showLinks(){
    linksHidden = false;
    hideButton.innerText = "v";
    for(var i = 0; i < navLinks.length; i++){
        navLinks[i].classList.remove("hidden");
    }
}

function hideLinks(){
    linksHidden = true;
    hideButton.innerText = ">";
    for(var i = 0; i < navLinks.length; i++){
        navLinks[i].classList.add("hidden");
    }
}