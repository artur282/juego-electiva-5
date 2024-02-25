


/**
 * 
 * @param {Array<string>} deck se recibe el deck
 * @returns {string} se devuelve un carta del deck
 */

export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}