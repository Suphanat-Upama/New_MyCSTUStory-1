// script.js // Manubar Header
document.getElementById('menuToggle').addEventListener('click', function() {
    const menu = document.getElementById('menu');
    const maxHeight = menu.style.maxHeight;
  
    // Toggle การแสดงเมนู
    menu.style.maxHeight = maxHeight === '0px' || maxHeight === '' ? '200px' : '0px';
  });
  



