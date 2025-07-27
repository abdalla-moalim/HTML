document.addEventListener("DOMContentLoaded", () => {
  // Registration form
  const regForm = document.getElementById("regForm");
  const regMessage = document.getElementById("regMessage");

  if (regForm) {
    regForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("regName").value.trim();
      const email = document.getElementById("regEmail").value.trim();

      if (name && email) {
        localStorage.setItem("registeredUser", JSON.stringify({ name, email }));
        regMessage.textContent = `Thanks for registering, ${name}!`;
        regForm.reset();

        setTimeout(() => {
          regMessage.textContent = "";
        }, 4000);
      }
    });
  }

  // Contact form
  const contactForm = document.getElementById("contactForm");
  const contactStatus = document.getElementById("contactMessageStatus");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("contactName").value.trim();
      const email = document.getElementById("contactEmail").value.trim();
      const message = document.getElementById("contactMessage").value.trim();

      if (name && email && message) {
        localStorage.setItem(
          "contactMessage",
          JSON.stringify({ name, email, message })
        );
        contactStatus.textContent = "Message saved! We'll be in touch.";
        contactForm.reset();

        setTimeout(() => {
          contactStatus.textContent = "";
        }, 4000);
      }
    });
  }
});
