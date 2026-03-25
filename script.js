document.getElementById('menuBtn').addEventListener('click', function() {
  document.getElementById('navDropdown').classList.add('open');
});
document.getElementById('closeMenuBtn').addEventListener('click', function() {
  document.getElementById('navDropdown').classList.remove('open');
});
document.querySelectorAll('#navDropdown a').forEach(function(link) {
  link.addEventListener('click', function() {
    document.getElementById('navDropdown').classList.remove('open');
  });
});
function openMenu() {
  var modal = document.getElementById('menuModal');
  modal.classList.add('open');
  modal.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}
function closeMenu() {
  document.getElementById('menuModal').classList.remove('open');
  document.body.style.overflow = '';
}
(function() {
  var now = new Date();
  var day = now.getDay();
  var time = now.getHours() + now.getMinutes() / 60;
  var s1 = document.getElementById('today-status');
  var s2 = document.getElementById('today-status2');
  var h  = document.getElementById('today-hours');
  if (day === 0) {
    if (s1) { s1.textContent = 'Closed Today'; s1.style.color = '#cc7050'; }
    if (s2) { s2.textContent = 'Closed Today'; s2.style.color = '#cc7050'; }
    if (h)  { h.textContent = 'Closed on Sundays'; }
  } else {
    var isOpen = time >= 10 && time < 19;
    var txt = isOpen ? '&#9679; Open Now' : '&#9679; Closed';
    var col = isOpen ? '#6aaa70' : '#cc7050';
    if (s1) { s1.innerHTML = txt; s1.style.color = col; }
    if (s2) { s2.innerHTML = txt; s2.style.color = col; }
    if (h)  { h.textContent = '10:00 AM - 7:00 PM'; }
  }
})();