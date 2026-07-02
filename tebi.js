/*
 * Tebi Reservation Widget — Pompstation Amsterdam
 */
var TEBI_TOKEN = '545611_8f53d68e7bed6544fbb01fcc5b61eeaf2c5f0c7b7b1ccb64936b0d04ef73018f';

/* Laad het widget-script direct bij page load */
(function () {
  var s = document.createElement('script');
  s.src = 'https://live.tebi.co/ecom/widget-manager.js';
  s.setAttribute('data-widget-token', TEBI_TOKEN);
  s.id = 'tebi';
  (document.head || document.body).appendChild(s);
})();

/* Wordt aangeroepen door alle "Reserveer"-knoppen op de site */
window.openReservation = function () {
  /* Primair: officiële hash-trigger van Tebi */
  if (window.location.hash === '#tebi-reservations') {
    history.replaceState(null, '', window.location.pathname + window.location.search);
    setTimeout(function () { window.location.hash = 'tebi-reservations'; }, 20);
  } else {
    window.location.hash = 'tebi-reservations';
  }
  /* Secundair: JS API indien beschikbaar */
  if (window.Tebi && typeof window.Tebi.openWidget === 'function') {
    window.Tebi.openWidget();
  }
};
