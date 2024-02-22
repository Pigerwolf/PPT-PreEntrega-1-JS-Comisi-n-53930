// Función para la elección aleatoria de la computadora
function obtenerEleccionComputadora() {
    let opciones = ["piedra", "papel", "tijeras"];
    return opciones[Math.floor(Math.random() * opciones.length)];
}

// Función del resultado del juego
function determinarResultado(eleccionUsuario, eleccionComputadora) {
    if (eleccionUsuario === eleccionComputadora) {
        return "Empate";
    } else if (
        (eleccionUsuario === "piedra" && eleccionComputadora === "tijeras") ||
        (eleccionUsuario === "papel" && eleccionComputadora === "piedra") ||
        (eleccionUsuario === "tijeras" && eleccionComputadora === "papel")
    ) {
        return "Ganaste";
    } else {
        return "Perdiste";
    }
}

// Función para jugar

function jugar() {
    let puntajeUsuario = 0;
    let puntajeComputadora = 0;

    while (puntajeUsuario < 5 && puntajeComputadora < 5) {
        let eleccionUsuario = prompt("Elige piedra, papel o tijeras:").toLowerCase();
        if (eleccionUsuario !== "piedra" && eleccionUsuario !== "papel" && eleccionUsuario !== "tijeras") {
            alert("Por favor, introduce una opción válida.");
            continue;
        }

        let eleccionComputadora = obtenerEleccionComputadora();
        let resultado = determinarResultado(eleccionUsuario, eleccionComputadora);
//Muestra quien ganó
        alert("Tu elección: " + eleccionUsuario + "\nElección de la computadora: " + eleccionComputadora + "\nResultado: " + resultado);

        if (resultado === "Ganaste") {
            puntajeUsuario++;
        } else if (resultado === "Perdiste") {
            puntajeComputadora++;
        }
//Muestra los resultados
        alert("Puntuación: Usuario " + puntajeUsuario + " - Computadora " + puntajeComputadora);
    }

    if (puntajeUsuario === 5) {
        alert("¡Eres el campeón! O quizá eres un Pepe D:<");
    } else {
        alert("¡La computadora ha ganado! ¡Inténtalo de nuevo!");
    }
}

// Iniciar el juego con "jugar()" ----> anexado al HTML