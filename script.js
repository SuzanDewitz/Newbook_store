window.addEventListener('scroll', function() {
    var header = document.getElementById('sticky-header');
  
    // Change the value based on your needs
    var scrollThreshold = 100;
  
    if (window.scrollY > scrollThreshold) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  });
  