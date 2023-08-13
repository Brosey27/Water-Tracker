const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const glasses = document.querySelectorAll('.glass');

checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener('change', function () {
    const glass = glasses[index].querySelector('.water');
    if (checkbox.checked) {
      glass.style.height = '100%';
    } else {
      glass.style.height = '0';
    }
  });
});
