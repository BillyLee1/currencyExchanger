import displayConverted from "./index.js";
import displayError from "./displayError.js";

export default function conversion(response, selection, userInput) {
  if (selection === "cny") {
    displayConverted(parseFloat(response.conversion_rates.CNY * userInput).toFixed(2));
  } else if (selection === "eur") {
    displayConverted(parseFloat(response.conversion_rates.EUR * userInput).toFixed(2));
  } else if (selection === "jpy") {
    displayConverted(parseFloat(response.conversion_rates.JPY * userInput).toFixed(2));
  } else if (selection === "krw") {
    displayConverted(parseFloat(response.conversion_rates.KRW * userInput).toFixed(2));
  } else if (selection === "zar") {
    displayConverted(parseFloat(response.conversion_rates.ZAR * userInput).toFixed(2));
  } else {
    displayError(response);
  }
}
