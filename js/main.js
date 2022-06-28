const searchEl = documnet.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function() {
  searchInputEl.focus();
});

searchInputEl.addEventListenr('focus', fuction () {
  searchEl.classList.add('focused');
  searchInputEl.setAtrribute('')
});