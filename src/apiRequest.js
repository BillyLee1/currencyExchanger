export default function apiCall(input) {
  let request = new XMLHttpRequest();
  const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`

  request.addEventListener('loadend', function()  {
    const response = JSON.parse(this.responseText);
    if (this.status === 200) {
      
    }
  });

  request.open("GET", url, true);
  request.send();
}
