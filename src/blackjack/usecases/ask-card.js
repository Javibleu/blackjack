 /**
  * Gets the last card of a deck
  * @param {string[]} deck Deck of cards 
  * @returns {string} Card
  */
 export const askCard = (deck) => {
 
    if ( !deck || deck.length === 0 )  throw new Error('No cards in the deck');
    const card = deck.pop();
    return card;
}