function popup() {
    var btn = document.getElementById("login").innerHTML;

    if (btn == "Log In") {
        document.querySelector(".popup").style.display = "flex";
        $(".popup").animate({ opacity: "1" }, "slow");
        document.body.style.overflow = "hidden";
    }

    else {
        logout();
    }

}
function close_popup() {
    $(".popup").animate({ opacity: "0" }, "slow");
    document.querySelector(".popup").style.display = "none";
    document.body.style.overflow = "scroll";
    document.getElementById("username").value = "";
    document.getElementById("pw").value = "";
}
function login(name) {
    document.querySelector(".user_profile").style.display = "inline";
    document.getElementById("user_name").innerHTML = name;
    document.getElementById("login").innerHTML = "Log Out";
    close_popup();
}
function logout() {
    document.querySelector(".user_profile").style.display = "none";
    document.getElementById("login").innerHTML = "Log In";
}

function menu(){
    document.getElementById("sidebar").classList.toggle('active');
}

function histbook(){
    document.getElementById("container").classList.toggle('active');
}