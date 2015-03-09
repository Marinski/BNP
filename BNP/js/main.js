(function () {

    $("#periodDropdown, #countryDropdown, .dropdown-trigger-class, .close, close-btn").click(function (event) {
        event.preventDefault();
    });
    // Custom dropdown select
    $(document).ready(function () {

        $(".dropdown dt a#periodDropdown").click(function () {
            $(".dropdown dd ul#periodUl").toggle();
        });

        $(".dropdown dt a#countryDropdown").click(function () {
            $(".dropdown dd ul#countryUl").toggle();
        });

        $(".dropdown dd ul#periodUl li a").click(function () {
            var text = $(this).html();
            $(".dropdown dt a#periodDropdown span").html(text);
            $(".dropdown dd ul#periodUl").hide();
            // $("#result").html("Selected value is: " + getSelectedValue("sample"));
        });

        $(".dropdown dd ul#countryUl li a").click(function () {
            var text = $(this).html();
            $(".dropdown dt a#countryDropdown span").html(text);
            $(".dropdown dd ul#countryUl").hide();
            // $("#result").html("Selected value is: " + getSelectedValue("sample"));
        });

        //do this function foreach dl
        //function getSelectedValue(id) {
        //    return $("#" + id).find("dt a span.value").html();
        //}

        //$(document).bind('click', function (e) {
        //    var $clicked = $(e.target);
        //    if (!$clicked.parents().hasClass("dropdown"))
        //        $(".dropdown dd ul").hide();
        //});

    });
    // Simulation of calculating result just for demonstration
    $(".calculateSumbit").click(function () {
        $(".result").fadeIn(400); // will fade in the DIV that prints result from calculations.
    });


    $("#modalTrigger").click(function () { // makes sure the whole site is loaded
        $("#Terms").fadeIn(400); // will fade in the white DIV that covers the website.
        $(".modalDialog div").css({ "display": "block"});
    });

    $(".close, .close-btn").click(function () {
        $("#Terms").delay(350).fadeOut("slow"); // will fade in the white DIV that covers the website.
        $(".modalDialog").delay(350).css({ "display": "none" });
    });

    // Show/hide each OFFER type by ID and add class ACTIVE to arrow wrapper
    $("#offer-1").click(function () {
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

    $("#offer-2").click(function () {
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

    $("#offer-3").click(function () {
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

    $("#offer-4").click(function () {
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


    //placeholder support for old browsers
    $(function () {
        if (!$.support.placeholder) {
            var active = document.activeElement;
            $(':text').focus(function () {
                if ($(this).attr('placeholder') != '' && $(this).val() == $(this).attr('placeholder')) {
                    $(this).val('').removeClass('hasPlaceholder');
                }
            }).blur(function () {
                if ($(this).attr('placeholder') != '' && ($(this).val() == '' || $(this).val() == $(this).attr('placeholder'))) {
                    $(this).val($(this).attr('placeholder')).addClass('hasPlaceholder');
                }
            });
            $(':text').blur();
            $(active).focus();
            $('form').submit(function () {
                $(this).find('.hasPlaceholder').each(function () { $(this).val(''); });
            });
        }
    });

}(jQuery));