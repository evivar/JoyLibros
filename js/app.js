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