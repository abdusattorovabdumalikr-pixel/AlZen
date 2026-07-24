function imgFallback(imgEl){
  imgEl.style.display = 'none';
  var fallback = imgEl.nextElementSibling;
  if (fallback && fallback.classList.contains('img-fallback')) {
    fallback.style.display = 'flex';
  }
}

function toggleDropdown(btn){
  var dd = btn.closest('.dropdown');
  var isOpen = dd.classList.contains('open');
  document.querySelectorAll('.dropdown.open').forEach(function(el){ el.classList.remove('open'); });
  if(!isOpen){ dd.classList.add('open'); }
}

document.addEventListener('click', function(e){
  if(!e.target.closest('.dropdown')){
    document.querySelectorAll('.dropdown.open').forEach(function(el){ el.classList.remove('open'); });
  }
});
