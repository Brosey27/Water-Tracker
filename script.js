const waterCheckbox = document.getElementById('waterCheckbox');
const waterFill = document.querySelector('.water');

waterCheckbox.addEventListener('change', function () {
  if (waterCheckbox.checked) {
    waterFill.style.height = '100%';
  } else {
    waterFill.style.height = '0';
  }
});
