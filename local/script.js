// These phrases take turns in the highlighted introduction.
const focusPhrases = [
  "code meets hardware",
  "models become motion",
  "signals become decisions",
  "ideas become systems",
];

const changingFocus = document.querySelector("#changing-focus");
let phraseIndex = 0;

// Change the phrase every 2.4 seconds.
setInterval(() => {
  changingFocus.classList.add("is-changing");

  // Wait for the fade-out, then show the next phrase.
  setTimeout(() => {
    phraseIndex = (phraseIndex + 1) % focusPhrases.length;
    changingFocus.textContent = focusPhrases[phraseIndex];
    changingFocus.classList.remove("is-changing");
  }, 250);
}, 2400);
