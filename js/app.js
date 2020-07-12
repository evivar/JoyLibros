"use strict";

var sendButton = $(".send");

function sendEmail() {

    sendButton.text("Enviando...");
    sendButton.css({
        "background-color": " white",
        "border": "1px solid #0BB0A5",
        "color": "#0BB0A5"
    })
    setTimeout(() => {
        sendButton.text("Enviar");
        sendButton.css({
            "background-color": " #0BB0A5",
            "border": "1px solid #0BB0A5",
            "color": "white"
        })
    }, 2000);

}

$("[data-trigger]").on("click", function() {
    var trigger_id = $(this).attr('data-trigger');
    $(trigger_id).toggleClass("show");
    $('body').toggleClass("offcanvas-active");
});

// close button 
$(".btn-close").click(function(e) {
    $(".navbar-collapse").removeClass("show");
    $("body").removeClass("offcanvas-active");
});

$('.verResenyas').on("click", function() {
    window.open('https://www.google.es/search?q=Compra+Venta+de+Libros+Ciudad+Lineal+JOY+LIBROS,+Calle+de+Alcal%C3%A1,+414,+28027+Madrid&ludocid=15094823321630282757#lrd=0xd422fe996c463d9:0xd17b95d5d10e1405,1');
})

$('.whatsapp').on('click', function() {
    window.open('https://wa.me/34642383825');
});

$('.sendEmailVender').on('click', function() {
    window.location = 'mailto:ruben32622@gmail.com?subject=Me gustaria vender unos libros'
});

$('.sendEmailComprar').on('click', function() {
    window.location = 'mailto:ruben32622@gmail.com?subject=Me gustaria comprar unos libros'
});

$('.goToJoyLibrosBtn').on('click', function() {
    window.open('https://www.joylibros.com');
});