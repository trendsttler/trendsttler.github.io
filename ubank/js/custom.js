$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 120) {
        //clearHeader, not clearheader - caps H
        $(".custom-nav").addClass("scrolled-Header fixed-top").removeClass("pos-absolute");
    }
    else{
        $(".custom-nav").removeClass("scrolled-Header");
    }
}); //missing );