function showImage(letter) {
  const resultDiv = document.getElementById(`result-${letter}`);
  resultDiv.style.display = "block"; // Show the result section
}

function hideResult(letter) {
  const resultDiv = document.getElementById(`result-${letter}`);
  resultDiv.style.display = "none"; // Hide the result section
}
