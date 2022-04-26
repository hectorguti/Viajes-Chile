// Función: Alerta envío de correo

document.querySelectorAll('#enviarCorreo').forEach(function(e) {   
  e.addEventListener('click', function() {     
    this.style.backgroundColor = "green";   
    alert("¡El correo fue enviado con éxito!");
    this.innerText = "Enviado"
  }) 
});

