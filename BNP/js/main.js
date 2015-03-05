(function() {
    
    // Simulation of calculating result just for demonstration
    $(".calculateSumbit").click(function() {
        $(".result").css("display", "block");
        return false;
    });

    // Show/hide each OFFER type by ID and add class ACTIVE to arrow wrapper
    $("#offer-1").click(function() {
        $("#content-1").slideToggle(1000);
        if ($("#content-1").is(":visible")) {
            $("#content-1").css("display", "inline-block");
            // add class to link
            if ($("#offer-1").hasClass("active")) {
                $("#offer-1").removeClass("active");
            }
            else {
                $("#offer-1").addClass("active");
            }
        }
        $("#content-2, #content-3, #content-4").slideUp(800);
        $(".result").css("display", "none");
        // remove class
        $("#offer-2, #offer-3, #offer-4").removeClass("active");
        return false;
    });
    $("#offer-2").click(function() {
        $("#content-2").slideToggle(1000);
        if ($("#content-2").is(":visible")) {
            $("#content-2").css("display", "inline-block");
            // add class to link
            if ($("#offer-2").hasClass("active")) {
                $("#offer-2").removeClass("active");
            }
            else {
                $("#offer-2").addClass("active");
            }
        }
        $("#content-1, #content-3, #content-4").slideUp(800);
        $(".result").css("display", "none");
        // remove class
        $("#offer-1, #offer-3, #offer-4").removeClass("active");
        return false;
    });
    $("#offer-3").click(function() {
        $("#content-3").slideToggle(1000);
        if ($("#content-3").is(":visible")) {
            $("#content-3").css("display", "inline-block");
            // add class to link
            if ($("#offer-3").hasClass("active")) {
                $("#offer-3").removeClass("active");
            }
            else {
                $("#offer-3").addClass("active");
            }
        }
        $("#content-1, #content-2, #content-4").slideUp(800);
        $(".result").css("display", "none");
        // remove class
        $("#offer-1, #offer-2, #offer-4").removeClass("active");
        return false;
    });
    $("#offer-4").click(function() {
        $("#content-4").slideToggle(1000);
        if ($("#content-4").is(":visible")) {
            $("#content-4").css("display", "inline-block");
            // add class to link
            if ($("#offer-4").hasClass("active")) {
                $("#offer-4").removeClass("active");
            }
            else {
                $("#offer-4").addClass("active");
            }
        }
        $("#content-1, #content-2, #content-3").slideUp(800);
        $(".result").css("display", "none");
        // remove class
        $("#offer-1, #offer-2, #offer-3").removeClass("active");
        return false;
    });

}(jQuery));