import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import apiCall from './apiRequest.js';

let handleConversion = (event) => {
  event.preventDefault();

  let selection = document.querySelector('select option:checked').value;
  let userInput = document.querySelector('.userValue').value;

  apiCall(selection, userInput);
  
};

export default function displayConverted(val) {
  let answer = document.querySelector('.conversion');
  answer.value = val;
  
  if (answer.value === "NaN") {
    answer.value = "Only enter numbers";
  }
}

window.addEventListener('load', function() {
  let change = document.querySelector('.userValue');
  change.addEventListener('change', handleConversion);
});

window.addEventListener('load', function() {
  let change = document.querySelector('.currency');
  change.addEventListener('change', handleConversion);
});
