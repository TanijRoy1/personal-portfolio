var typed = new Typed(".text", {
  strings: ["Frontend Developer", "JavaScript Enthusiast", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// ------------ about content tab----------
const tabLinks = document.getElementsByClassName("tab-link");
const tabContents = document.querySelectorAll(".tab-contents");

function openTab(tabName) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}

// ------------To automatically add the .active class to .nav-link as
//  the user scrolls and reaches a section-----

const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");

function removeActiveClasses() {
  navLinks.forEach((link) => link.classList.remove("active"));
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      const navLink = document.querySelector(`.nav-link[href="#${id}"]`);

      if (entry.isIntersecting) {
        removeActiveClasses();
        navLink.classList.add("active");
      }
    });
  },
  {
    threshold: 0.5,
  }
);

sections.forEach((section) => observer.observe(section));

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    removeActiveClasses();
    link.classList.add("active");
  });
});

// --------------add class "animate" when section is appeared,nav-link is
//  clicked and remove when section is disappeared------------

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".home-section");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    },
    {
      threshold: 0.3, // Trigger when 30% visible
    }
  );

  sections.forEach((section) => observer.observe(section));

  // Optional: scrollIntoView for all nav links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      const target = document.querySelector(targetId);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    });
  });
});



















// --------------------------------showing msg on clicking instagram---------------------
const instagramLinks = document.querySelectorAll(".instagram-link");
  const instaModal = document.getElementById("insta-modal");
  const closeModal = document.getElementById("close-modal");

  instagramLinks.forEach( instagramLink => {
    instagramLink.addEventListener("click", function (e) {
      e.preventDefault();
      instaModal.style.display = "flex";
    });
    
  });

  closeModal.addEventListener("click", function () {
    instaModal.style.display = "none";
  });