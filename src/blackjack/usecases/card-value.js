/**
 * 
 * @param {string} card Example: '3D' for 3 of Diamonds
 * @returns {number} returns 3
 */
export const cardValue = ( card ) => {
 
    const valor = card.substring(0, card.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}