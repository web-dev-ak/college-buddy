const hamburger = document.querySelector(".hamburger");
const navBarMenuFirst = document.querySelector("#navbarMenuFirst");
const cross = document.querySelector(".cross h1");

hamburger.addEventListener("click", () => {
  if (window.outerWidth <= 426) { // Mobile screen
    navBarMenuFirst.style.left = "0";
   
  } else { 
    navBarMenuFirst.style.top = "0%";
  }
});

cross.addEventListener("click", () => {
  if (window.outerWidth <= 426) { 
    navBarMenuFirst.style.left = "100%";
  } else { 
    navBarMenuFirst.style.top = "-100%";
  }
});
