let currentSection = 0;
let isScrolling = false;

const sections = document.querySelectorAll(".screen");

window.addEventListener("wheel", (e) => {
  if (isScrolling) return;

  isScrolling = true;

  if (e.deltaY > 0 && currentSection < sections.length - 1) {
    // Scroll down
    currentSection++;
  } else if (e.deltaY < 0 && currentSection > 0) {
    // Scroll up
    currentSection--;
  }

  sections[currentSection].scrollIntoView({ behavior: "smooth" });

  // Add delay to avoid rapid scroll
  setTimeout(() => {
    isScrolling = false;
  }, 1000);
});
