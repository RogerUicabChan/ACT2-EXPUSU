// Obtener todos los botones de "Agregar al Carrito"
const addButtons = document.querySelectorAll('.add');

// Función para mostrar el mensaje
function showMessage() {
    const message = document.getElementById('message');
    message.style.display = 'block'; // Muestra el mensaje
    setTimeout(() => {
        message.style.display = 'none'; // Oculta el mensaje después de 3 segundos
    }, 3000);
}

// Añadir un evento de clic a cada botón
addButtons.forEach(button => {
    button.addEventListener('click', showMessage);
});