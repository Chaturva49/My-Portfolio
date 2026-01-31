// Smooth scroll with navbar offset fix
const navLinks = document.querySelectorAll(".nav-links a");
const navbarHeight = document.querySelector(".navbar").offsetHeight;

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    const offsetPosition =
      targetSection.offsetTop - navbarHeight + 5;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  });
});
