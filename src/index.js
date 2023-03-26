import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import apiCall from './apiRequest.js';

let handleConversion = (event) => {
  event.preventDefault();
  let selection = document.querySelector('select option:checked').value;
  let userInput = document.querySelector('.userValue').value;
  apiCall(selection, userInput);
  
}

window.addEventListener('load', function() {
  let change = document.querySelector('.userValue');
  change.addEventListener('change', handleConversion);
});
