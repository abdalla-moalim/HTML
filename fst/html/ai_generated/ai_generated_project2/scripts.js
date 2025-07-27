console.log("TrustBank site loaded!");

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    console.log(`Hovered: ${btn.innerText}`);
  });
});

// Scroll utility
function scrollToForm(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

// Account form submission
document.getElementById("openAccountForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(e.target));
  console.log("Account Form Submitted:", formData);
  alert("Account request submitted successfully!");
  e.target.reset();
});

// Contact form submission
document.getElementById("contactForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(e.target));
  console.log("Contact Form Submitted:", formData);
  alert("Thanks for reaching out!");
  e.target.reset();
});
