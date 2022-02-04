document.getElementById("mi-form").addEventListener("submit", procesarFormulario);
 
function procesarFormulario(evento) {    
  evento.preventDefault()
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  
  console.log( nombre );
  console.log( apellido );
  
  const mensajesNode = document.getElementById("mensajes");
  mensajesNode.innerHTML = "Datos guardados";
  mensajesNode.className = "ok";
  
  return false;
}


