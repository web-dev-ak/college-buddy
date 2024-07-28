const hamburger = document.querySelector(".hamburger");
const navBarMenuFirst = document.querySelector("#navbarMenuFirst");
const cross = document.querySelector(".cross img");

hamburger.addEventListener("click", () => {
  console.log(window.outerWidth);
  if (window.outerWidth <= 426) { // Mobile screen
    navBarMenuFirst.style.left = "0";
   
  } else { // Tablet and above screens
    navBarMenuFirst.style.top = "0%";
  }
});

cross.addEventListener("click", () => {
  if (window.outerWidth <= 426) { // Mobile screen
    navBarMenuFirst.style.left = "100%";
  } else { // Tablet and above screens
    navBarMenuFirst.style.top = "-100%";
  }
});
