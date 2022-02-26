const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const body = document.querySelector("body");

  burger.addEventListener("mouseover", () => {
    burger.classList.toggle("hov-burger");
  });

  burger.addEventListener("click", () => {
    //Toggle nav
    nav.classList.toggle("nav-active");
    body.classList.toggle("scroll-stop");

    //Animte Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation =
          "navLinkFade 0.5s ease forwards " + (index / 7 + 0.5) + "s";
      }
    });
    //burger animation

    burger.classList.toggle("toggle");
  });

  burger.addEventListener("mouseout", () => {
    burger.classList.toggle("hov-burger");
  });
};

navSlide();
