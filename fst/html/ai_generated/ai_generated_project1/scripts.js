// Placeholder logic - add your own interactive features here
console.log("TrustBank site loaded!");

document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    console.log(`Hovered: ${btn.innerText}`);
  });
});
