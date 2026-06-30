/*
 * Tebi Reservation Widget — Pompstation Amsterdam
 */
var TEBI_TOKEN = '545611_8f53d68e7bed6544fbb01fcc5b61eeaf2c5f0c7b7b1ccb64936b0d04ef73018f';

var _tebiReady = false;
var _tebiQueue = [];

function _onTebiReady(fn) {
  if (_tebiReady) { fn(); return; }
  _tebiQueue.push(fn);
}

/* Laad widget direct bij page load zodat de zwevende knop verschijnt */
document.addEventListener('DOMContentLoaded', function () {
  var s = document.createElement('script');
  s.src = 'https://live.tebi.co/ecom/widget-manager.js';
  s.setAttribute('data-widget-token', TEBI_TOKEN);
  s.setAttribute('data-position', 'bottom-left');
  s.id = 'tebi';
  s.async = true;
  s.onload = function () {
    _tebiReady = true;
    _tebiQueue.forEach(function (fn) { try { fn(); } catch (e) {} });
    _tebiQueue = [];
  };
  s.onerror = function () {
    console.warn('[Tebi] Widget kon niet laden.');
  };
  document.head.appendChild(s);
});

/* Wordt aangeroepen door alle "Reserveer"-knoppen op de site */
window.openReservation = function () {
  window.location.hash = 'tebi-reservations';
};
