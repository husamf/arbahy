// JavaScript Document

// $(window).resize(function(){
// });

$(window).resize(function() {

    $(document).ready(function() {
        if ($(window).width() < 767) {
            $(".order-mobile-1").addClass("order-1");
            $(".order-mobile-2").addClass("order-2");
            $(".order-mobile-3").addClass("order-3");

            $(".for-order-4").addClass("order-3");
            $(".for-order-3").addClass("order-5");

        } else {
            $(".order-mobile-1").removeClass("order-1");
            $(".order-mobile-2").removeClass("order-2");
            $(".order-mobile-3").removeClass("order-3");

            $(".for-order-4").removeClass("order-3");
            $(".for-order-3").removeClass("order-5");


        }
    });

});


$(document).ready(function() {
    if ($(window).width() < 767) {
        $(".order-mobile-1").addClass("order-1");
        $(".order-mobile-2").addClass("order-2");
        $(".order-mobile-3").addClass("order-3");

        $(".for-order-4").addClass("order-3");
        $(".for-order-3").addClass("order-5");

    } else {
        $(".order-mobile-1").removeClass("order-1");
        $(".order-mobile-2").removeClass("order-2");
        $(".order-mobile-3").removeClass("order-3");

        $(".for-order-4").removeClass("order-3");
        $(".for-order-3").removeClass("order-5");


    }
});




$(".click-oncollapse").click(function() {
    $(".click-oncollapse").toggleClass("click-collapse");
    $(".span1-oncollapse").toggleClass("span1-collapse");
    $(".span3-oncollapse").toggleClass("span3-collapse");
});


function togglelogin() {
    $(".login-page").toggleClass("login-page-block");
}

function togglewithdrow() {
    $(".withdrow-page").toggleClass("withdrow-page-block");
}

function toggleplanA() {
    $(".planA-page").toggleClass("planA-page-block");
}

function toggleMywithdrowspPage() {
    $(".my-withdrows-page").toggleClass("my-withdrows-page-block");
}

function toggleMydepositspPage() {
    $(".my-deposits-page").toggleClass("my-deposits-page-block");
}

function togglelightbox() {
    $(".for-lightbox").toggleClass("for-lightbox-block");
}


$(document).keyup(function(e) {
    if (e.key === "Escape") {
        $(".login-page , .withdrow-page , planA-page , .my-withdrows-page , .my-deposits-page , for-lightbox").removeClass("login-page-block , withdrow-page-block , planA-page-block , .my-withdrows-page-block , .my-deposits-page-block for-lightbox-block");
    }
});



$(".tap-nav").click(function() {
    $(".tap-nav").removeClass("active-tap-nav");
    $(this).addClass("active-tap-nav");
});


$(document).ready(function() {
    $(".btn-details-money").click(function() {
        $(".details-win , .details-withdraw , .details-deposit , .details-withdraw-money , .details-Referral").removeClass("display-block");
        $(".details-win , .details-withdraw , .details-deposit , details-withdraw-money , .details-Referral").addClass("display-none");

        $(".details-money").addClass("display-block");
    });
});

$(document).ready(function() {
    $(".btn-details-win").click(function() {
        $(".details-money , .details-withdraw , .details-deposit , .details-withdraw-money , .details-Referral").removeClass("display-block");
        $(".details-money , .details-withdraw , .details-deposit , .details-withdraw-money , .details-Referral").addClass("display-none");

        $(".details-win").addClass("display-block");
    });
});

$(document).ready(function() {
    $(".btn-details-withdraw").click(function() {
        $(".details-win , .details-money ,  .details-deposit , .details-withdraw-money , .details-Referral").removeClass("display-block");
        $(".details-win , .details-money ,  .details-deposit , .details-withdraw-money , .details-Referral").addClass("display-none");

        $(".details-withdraw").addClass("display-block");
    });
});

$(document).ready(function() {
    $(".btn-details-deposit").click(function() {
        $(".details-win , .details-money , .details-withdraw , .details-withdraw-money , .details-Referral").removeClass("display-block");
        $(".details-win , .details-money , .details-withdraw , .details-withdraw-money , .details-Referral").addClass("display-none");

        $(".details-deposit").addClass("display-block");
    });
});

$(document).ready(function() {
    $(".btn-details-withdraw-money").click(function() {
        $(".details-deposit , .details-win , .details-money , .details-withdraw ,  .details-Referral").removeClass("display-block");
        $(".details-deposit , .details-win , .details-money , .details-withdraw ,  .details-Referral").addClass("display-none");

        $(".details-withdraw-money").addClass("display-block");
    });
});

$(document).ready(function() {
    $(".btn-details-Referral").click(function() {
        $(".details-deposit , .details-win , .details-money , .details-withdraw , .details-withdraw-money ").removeClass("display-block");
        $(".details-deposit , .details-win , .details-money , .details-withdraw , .details-withdraw-money ").addClass("display-none");

        $(".details-Referral").addClass("display-block");
    });
});


$(function() {
    $('.giv-money').keyup(function() {
        var a = $('.giv-money').val();
        $('.confirm-giv').html(a);
    })
});
$(document).ready(function() {
    $(".btn-confirm-1").click(function() {
        $(".giv-money-1").css({ 'display': 'none' });
        $(".giv-money-2").css({ 'display': 'block' });
    });
});
$(document).ready(function() {
    $(".btn-confirm-2").click(function() {
        $(".giv-money-2").css({ 'display': 'none' });
        $(".giv-money-1").css({ 'display': 'block' });
    });
});

$(document).ready(function() {
    $(".btn-choose-plan1").click(function() {
        $(".row-choose-plan").removeClass("plan-active");
        $(".row-choose-plan1").addClass("plan-active");
    });
});


$(document).ready(function() {
    $(".btn-choose-plan2").click(function() {
        $(".row-choose-plan").removeClass("plan-active");
        $(".row-choose-plan2").addClass("plan-active");
    });
});


$(document).ready(function() {
    $(".btn-choose-plan3").click(function() {
        $(".row-choose-plan").removeClass("plan-active");
        $(".row-choose-plan3").addClass("plan-active");
    });
});

$(document).ready(function() {
    $(".btn-choose-plan4").click(function() {
        $(".row-choose-plan").removeClass("plan-active");
        $(".row-choose-plan4").addClass("plan-active");
    });
});


$(document).ready(function() {
    $(".btn-choose-plan5").click(function() {
        $(".row-choose-plan").removeClass("plan-active");
        $(".row-choose-plan5").addClass("plan-active");
    });
});

$(document).ready(function() {
    $(".btn-choose-plan6").click(function() {
        $(".row-choose-plan").removeClass("plan-active");
        $(".row-choose-plan6").addClass("plan-active");
    });
});









$(document).ready(function() {
    $(".btn-pay-paypal").click(function() {
        $(".pay-payment").removeClass("display-block");
        $(".pay-payment").addClass("display-none");
        $(".pay-paypal").addClass("display-block");
    });
});

$(document).ready(function() {
    $(".btn-pay-perfect").click(function() {
        $(".pay-payment").removeClass("display-block");
        $(".pay-payment").addClass("display-none");
        $(".pay-perfect").addClass("display-block");
    });
});


$(document).ready(function() {
    $(".btn-pay-bitcoin-cash").click(function() {
        $(".pay-payment").removeClass("display-block");
        $(".pay-payment").addClass("display-none");
        $(".pay-bitcoin-cash ").addClass("display-block");
    });
});
$(document).ready(function() {
    $(".btn-pay-bitcoin").click(function() {
        $(".pay-payment").removeClass("display-block");
        $(".pay-payment").addClass("display-none");
        $(".pay-bitcoin").addClass("display-block");
    });
});
$(document).ready(function() {
    $(".btn-pay-ethereum").click(function() {
        $(".pay-payment").removeClass("display-block");
        $(".pay-payment").addClass("display-none");
        $(".pay-ethereum").addClass("display-block");
    });
});
$(document).ready(function() {
    $(".btn-pay-payeer").click(function() {
        $(".pay-payment").removeClass("display-block");
        $(".pay-payment").addClass("display-none");
        $(".pay-payeer").addClass("display-block");
    });
});
$(document).ready(function() {
    $(".btn-pay-dogecoin").click(function() {
        $(".pay-payment").removeClass("display-block");
        $(".pay-payment").addClass("display-none");
        $(".pay-dogecoin").addClass("display-block");
    });
});
$(document).ready(function() {
    $(".btn-pay-litecoin").click(function() {
        $(".pay-payment").removeClass("display-block");
        $(".pay-payment").addClass("display-none");
        $(".pay-litecoin").addClass("display-block");
    });
});




/////motion go to section in the page
$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {});
            }
        }
    });




// costum select
var x, i, j, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
for (i = 0; i < x.length; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    /*for each element, create a new DIV that will act as the selected item:*/
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /*for each element, create a new DIV that will contain the option list:*/
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < selElmnt.length; j++) {
        /*for each option in the original select element,
        create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
            /*when an item is clicked, update the original select box,
            and the selected item:*/
            var y, i, k, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;
            for (i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function(e) {
        /*when the select box is clicked, close any other select boxes,
        and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}

function closeAllSelect(elmnt) {
    /*a function that will close all select boxes in the document,
    except the current select box:*/
    var x, y, i, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

// $(document).ready(function() {
//     $(".select-payment").click(function() {
//         $(".with-payment").removeClass("display-block");
//         $(".with-payment").addClass("display-none");
//     });
// });
// $(document).ready(function() {
//     $(".select-paypal").click(function() {
//         $(".with-payment").removeClass("display-block");
//         $(".with-payment").addClass("display-none");
//         $(".with-payment-paypal").addClass("display-block");
//     });
// });
$(function() {
    $('.id-personal-text').keyup(function() {
        var idNumber = $('.id-personal-text').val();
        $('.id-personal').html(idNumber);
    })
});
$(document).ready(function() {
    $(".btn-edit-id").click(function() {
        $(".edit-personal-1").removeClass("display-block");
        $(".edit-personal-1").addClass("display-none");
        $(".edit-personal-2").addClass("display-block");
    });
});




$(function() {
    $('.mobile-personal-text').keyup(function() {
        var mobileNumber = $('.mobile-personal-text').val();
        $('.mobile-personal').html(mobileNumber);
    })
});

$(document).ready(function() {
    $(".btn-edit-mobile").click(function() {
        $(".edit-personal-3").removeClass("display-block");
        $(".edit-personal-3").addClass("display-none");
        $(".edit-personal-4").addClass("display-block");
    });
});






$(document).ready(function() {
    $(".btn-edit-ok").click(function() {
        $(".edit-personal-done-2").removeClass("display-block");
        $(".edit-personal-done-2").addClass("display-none");
        $(".edit-personal-done-1").addClass("display-block");
    });
});
$(function() {
    $('.email-personal-text').keyup(function() {
        var email = $('.email-personal-text').val();
        $('.email-personal').html(email);
    })
});
$(document).ready(function() {
    $(".btn-edit-email").click(function() {
        $(".edit-personal-5").removeClass("display-block");
        $(".edit-personal-5").addClass("display-none");
        $(".edit-personal-6").addClass("display-block");
    });
});
$(document).ready(function() {
    $(".btn-submit-login").click(function() {
        $(".user-log-in").removeClass("display-block");
        $(".user-log-in").addClass("display-none");
        $(".user-log-out").addClass("display-block");
    });
});
$(function() {
    $('#fname').keyup(function() {
        var userName = $('#fname').val();
        $('.user-name').html(userName);
    })
});
$(function() {
    $('#userName').keyup(function() {
        var userName2 = $('#fname').val();
        $('.user-name').html(userName2);
    })
});
$(document).ready(function() {
    $(".span-language").click(function() {
        $(".languages , .arrow-left").toggleClass("display-none");
    });
});
$(document).ready(function() {
    $(".sttings").click(function() {
        $(".arrow-logout , .logout").toggleClass("display-none");
    });
});
/////////////fa-go-up
$(function() {
    // Amount of scrolling before button is shown/hidden.
    var offset = 100;

    // Fade duration
    var duration = 500;

    // Toggle view of button when scrolling.
    $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
            $('#fa-go-up').fadeIn(duration);
        } else {
            $('#fa-go-up').fadeOut(duration);
        }
    });

    // Scroll to top when button is clicked.
    $('#fa-go-up').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, duration);
        return false;
    });
});