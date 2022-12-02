import _ from 'underscore'

import { askCard, cardValue, createDeck, computerTurn, createHTMLCard} from './usecases'
/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

 let deck         = [];
 const types      = ['C','D','H','S'];
 const specials = ['A','J','Q','K'];
 
 let puntosJugador = 0,
     puntosComputadora = 0;
 
 // Referencias del HTML
 const btnPedir   = document.querySelector('#btnPedir');
 const btnDetener = document.querySelector('#btnDetener');
 const btnNuevo   = document.querySelector('#btnNuevo');
 
 const divCartasJugador     = document.querySelector('#jugador-cartas');
 const divCartasComputadora = document.querySelector('#computadora-cartas');
 
 const puntosHTML = document.querySelectorAll('small');
 

 
 deck = createDeck(types, specials);
 
 

 
 
 
 // Eventos
 btnPedir.addEventListener('click', () => {
 
     const card = askCard(deck);
     
     puntosJugador = puntosJugador + cardValue( card );
     puntosHTML[0].innerText = puntosJugador;
     
     const cardImg = createHTMLCard(card)
     divCartasJugador.append( cardImg );

 
     if ( puntosJugador > 21 ) {
         console.warn('Lo siento mucho, perdiste');
         btnPedir.disabled   = true;
         btnDetener.disabled = true;
         computerTurn( puntosJugador, puntosHTML[1] , divCartasComputadora, deck);
 
     } else if ( puntosJugador === 21 ) {
         console.warn('21, genial!');
         btnPedir.disabled   = true;
         btnDetener.disabled = true;
         computerTurn( puntosJugador, puntosHTML[1] , divCartasComputadora, deck);
     }
 
 });
 
 
 btnDetener.addEventListener('click', () => {
     btnPedir.disabled   = true;
     btnDetener.disabled = true;
 
     computerTurn( puntosJugador, puntosHTML[1] , divCartasComputadora, deck);
 });
 
 btnNuevo.addEventListener('click', () => {
 
    //  console.clear();
    //  deck = [];
     deck = createDeck(types, specials);
 
     puntosJugador     = 0;
     puntosComputadora = 0;
     
     puntosHTML[0].innerText = 0;
     puntosHTML[1].innerText = 0;
 
     divCartasComputadora.innerHTML = '';
     divCartasJugador.innerHTML = '';
 
     btnPedir.disabled   = false;
     btnDetener.disabled = false;
 
 });
 
