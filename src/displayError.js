export default function displayError(response) {
  let error = document.querySelector('.error');
  if (response.result === "error") {
    error.innerText = response['error-type'];
  } else {
    error.innerText = "Currency does not exist. Try another one";
  }
}
