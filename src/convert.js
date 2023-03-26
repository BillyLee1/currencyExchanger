import displayConverted from "./index.js";

export default function conversion(response, selection, userInput) {
  if (selection === "cny") {
    displayConverted(response.conversion_rates.CNY * userInput);

  }
}
