const hamburger = document.querySelector(".hamburger");
const backdrop = document.querySelector(".backdrop");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu__link");

function openMenu() {
  document.body.classList.add("menu-open");
  hamburger.setAttribute("aria-expanded", "true");
  menu.setAttribute("aria-hidden", "false");
}

function closeMenu() {
  document.body.classList.remove("menu-open");
  hamburger.setAttribute("aria-expanded", "false");
  menu.setAttribute("aria-hidden", "true");
}

hamburger.addEventListener("click", () => {
  const isOpen = document.body.classList.contains("menu-open");
  isOpen ? closeMenu() : openMenu();
});

backdrop.addEventListener("click", closeMenu);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

// Newsletter form (front-end only demo)
const newsletterForm = document.getElementById("newsletterForm");
const newsletterMsg = document.getElementById("newsletterMsg");

if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = newsletterForm.name.value.trim();
    const email = newsletterForm.email.value.trim();

    // Replace this later with a real backend/API call
    newsletterMsg.textContent = `Thanks, ${name}! You’re signed up with ${email}.`;
    newsletterForm.reset();
  });
}
