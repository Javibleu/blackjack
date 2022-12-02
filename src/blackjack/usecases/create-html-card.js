/**
 * 
 * @param {string} card string with card name Example 5H 'Five of Hearts'
 * @return {HTMLImageElement} div image element  
 */
export const createHTMLCard = ( card ) => {

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ card }.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta;
    
}