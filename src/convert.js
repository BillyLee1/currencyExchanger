export default function conversion(response, selection, userInput) {
  if (selection === "cny") {
    console.log( response.conversion_rates.CNY * userInput);

  }
}
