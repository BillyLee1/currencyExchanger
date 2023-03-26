import conversion from './convert.js';

export default function apiCall(selection, userInput) {
  let request = new XMLHttpRequest();
  const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;

  request.addEventListener('loadend', function()  {
    const response = JSON.parse(this.responseText);
    if (this.status === 200) {
      conversion(response, selection, userInput);
    }
  });

  request.open("GET", url, true);
  request.send();
}
