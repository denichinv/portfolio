function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleTheme() {
  const themeIcon = document.getElementById("theme-icon");
  const profileImg = document.getElementById("prof-pic");
  const aboutImg = document.getElementById("about-pic");
  document.body.classList.toggle("dark-mode");

  // Switch icons
  if (document.body.classList.contains("dark-mode")) {
    themeIcon.src = "assets/light.png";
    profileImg.src = "assets/profile-pic-dark.jpeg";
    aboutImg.src = "assets/about-pic-dark.jpeg";
  } else {
    themeIcon.src = "assets/dark.png";
    profileImg.src = "assets/profile-pic.jpg";
    aboutImg.src = "assets/about-pic.jpeg";
  }
}
