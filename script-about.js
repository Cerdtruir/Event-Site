document.querySelector('.navbar-toggler').onclick = function () {
  const hamburger = document.querySelector('.navbar-toggler');
  if (hamburger.classList.contains('close-button')) {
    hamburger.innerHTML = '<span class="hamburger color-1">&#9776;</span>';
    hamburger.classList.remove('close-button');
  } else {
    hamburger.classList.add('close-button');
    hamburger.innerHTML = '<span class="hamburger color-1">&#10006;</span>';
  }
};
