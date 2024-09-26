const button = document.getElementById('toggleButton');

function toggleBackgroundColor() {
  
  document.body.classList.toggle('dark');
}


button.addEventListener('click', toggleBackgroundColor);
