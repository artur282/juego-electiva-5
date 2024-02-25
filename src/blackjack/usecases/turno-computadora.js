
import { pedirCarta,valorCarta,crearCartaHtml } from "./";

/**
 * 
 * @param {number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {HTMLElement} puntosHTML elementos html par mostrar los puntos 
 * @param {HTMLElement} divCartasComputadora elementos html par mostrar las cartas de la computadora
 * @param {Array<string>} deck arreglo que contiene las cartas
 */

export const turnoComputadora = ( puntosMinimos,puntosHTML,divCartasComputadora,deck ) => {

    let puntosComputadora = 0

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCartaHtml(carta)
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
