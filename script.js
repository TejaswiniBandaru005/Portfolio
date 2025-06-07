// Scroll to top
const topBtn = document.getElementById("topBtn");

window.onscroll = () => {
  topBtn.style.display = window.scrollY > 100 ? "block" : "none";
};

topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Form handling (optional log)
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const data = new FormData(this);
  console.log("Form Submitted", Object.fromEntries(data));
  alert("Message submitted!");
  this.reset();
});
