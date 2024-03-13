document.addEventListener('DOMContentLoaded', function() {
    const hamOpenIcon = document.querySelector('.ham-open');
    const smNavbar = document.querySelector('.sm-navbar');
    const smNavLinks = document.querySelector('.sm-nav-links');
    const openHam = document.querySelector('.ham-open');
    const closeHam = document.querySelector('.ham-close');
  
    smNavbar.addEventListener('click', function() {
      smNavLinks.classList.toggle('active');
      if (smNavLinks.classList.contains("active")) {
        openHam.style.display = 'none';
        closeHam.style.display = 'block';
      }
      else{
        openHam.style.display = 'block';
        closeHam.style.display = 'none';
      }
    });
    const copyRightDate = document.getElementById('ccdate')
    const newDate = new Date();
    const ccdate = newDate.getFullYear()
    copyRightDate.innerHTML = ccdate;
  });



