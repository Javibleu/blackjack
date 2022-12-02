import { askCard , cardValue, createHTMLCard} from "./";
 
 
 // turno de la computadora
 /**
  * Computer play until score is bigger to user score
  * @param {number} userScore score users get after stop playing
  * @param {HTMLElement} HTMLScore HTML element to show score
  * @param {string[]} deck deck of cards 
  */
 export const computerTurn = ( userScore, HTMLScore, div, deck ) => {
    if(!userScore) throw new Error('User Score is needed');
    if(!deck) throw new Error('Deck is needed');
    if(!HTMLScore) throw new Error('HTML element is needed');

    let computerScore = 0;
 
    do {
        const card = askCard(deck);

        computerScore = computerScore + cardValue( card );
        HTMLScore.innerText = computerScore;

        const cardImg = createHTMLCard( card );
        div.append( cardImg );

        if( userScore > 21 ) {
            break;
        }

    } while(  (computerScore < userScore)  && (userScore <= 21 ) );

    setTimeout(() => {
        if( computerScore === userScore ) {
            alert('Nadie gana :(');
        } else if ( userScore > 21 ) {
            alert('Computadora gana')
        } else if( computerScore > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}

