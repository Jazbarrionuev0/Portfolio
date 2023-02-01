$(document).ready(function () {
    $('#icono').click(function () {
        $('ul').toggleClass('show');
    });
    window.onscroll = function () {
        $('ul').removeClass('show');
    }
});
//form

function enviaremail() {
    Email.send({
        SecureToken: "2e07dbf2-4e5a-47a7-9ba4-ddaefa884e84",
        To: 'jazminbarrionuevocoder@gmail.com',
        From: "jazminbarrionuevo23@gmail.com",
        Subject: "Nuevo contacto por portfolio",
        Body: "Nombre: " + document.getElementById("name").value + "<br> Email: " + document.getElementById("email").value + "<br> Telefono: " + document.getElementById("telefono").value + "<br> Mensaje: " + document.getElementById("mensaje").value 
    }).then(
            message => alert(message)
        );
}