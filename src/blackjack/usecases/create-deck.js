 import _ from 'underscore'
/**
 * Returns a shuffled deck
 * @param {string[]} cardType example: ['C','D','H','S']
 * @param {string[]} specialType Example: ['A','J','Q','K']
 * @returns {string[]} Returns a shuffled deck of cards
 */
 export const createDeck = (cardType, specialType) => {
    if(!cardType || cardType === 0) throw new Error('Card Type is needed');
    if(!specialType || specialType === 0) throw new Error('Card Type is needed');
    const deck = [];
 
    for( let i = 2; i <= 10; i++ ) {
        for( let type of cardType ) {
            deck.push( i + type);
        }
    }

    for( let special of specialType ) {
        for( let type of cardType ) {
            deck.push( special + type);
        }
    }

    return _.shuffle(deck);
}