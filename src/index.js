import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

let handleConversion = (event) => {
  event.preventDefault();
  let userInput = document.querySelector('.userValue').value;
}

window.addEventListener('load', function() {
  let change = document.querySelector('.userValue');
  change.addEventListener('change', handleConversion);
});
