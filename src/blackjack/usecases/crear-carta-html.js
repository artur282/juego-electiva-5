
/**
 * 
 * @param {string} carta carta a extraer valor
 * @returns {HTMLImageElement} imagen de retorno
 */

export const crearCartaHtml= (carta) =>{
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta
}