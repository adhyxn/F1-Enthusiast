const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#schedule-page');
  const servicesMenu = document.querySelector('#services-page');
  let scrollPos = window.scrollY;

  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

function validateLoginForm() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email.trim() === "") {
      alert("Please enter your email.");
      return false;
  }

  if (password.trim() === "") {
      alert("Please enter your password.");
      return false;
  }

  return true; 
}

function validateForm() {
  var fullName = document.getElementById("fullName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  if (fullName.trim() === "") {
      alert("Please enter your full name.");
      return false;
  }

  if (email.trim() === "") {
      alert("Please enter your email.");
      return false;
  }

  if (password.trim() === "") {
      alert("Please enter your password.");
      return false;
  }

  if (confirmPassword.trim() === "") {
      alert("Please confirm your password.");
      return false;
  }

  if (password !== confirmPassword) {
      alert("Password and Confirm Password must match.");
      return false;
  }

  return true; 
}
