$(document).click(function(event) {
    if ( !$(event.target).hasClass('open')) {
       
    }
});

function openNav() {
        debugger
        document.getElementById("mySidenav").style.left = "0";
        document.getElementById("mySidenav").classList.add("open");
        document.getElementById("mySidenav").classList.remove("close");
        document.body.style.backgroundColor= "rgba(0, 0, 0, 0.5)";
        document.getElementById("main").style.filter = "brightness(0.5)";   
        document.getElementById("main").style.pointerEvents = "none";   
}

/* Set the width of the side navigation to 0 */
function closeNav() {
        document.getElementById("mySidenav").style.left = "-250px";
        document.body.style.backgroundColor= "#F9F9F9";
        document.getElementById("main").style.filter = "brightness(1)";
        document.getElementById("mySidenav").classList.remove("open");
        document.getElementById("mySidenav").classList.add("close");
        document.getElementById("main").style.pointerEvents = "";   
}
//Loader 
$(window).on('load', function () {
    setTimeout(function () {// allowing 3 secs to fade out loader
    /*$('.outerWrapper').fadeOut('slow');*/
    }, 1000);
   
});
  
