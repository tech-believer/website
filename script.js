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
if (changingFocus) {
  setInterval(() => {
    changingFocus.classList.add("is-changing");

    // Wait for the fade-out, then show the next phrase.
    setTimeout(() => {
      phraseIndex = (phraseIndex + 1) % focusPhrases.length;
      changingFocus.textContent = focusPhrases[phraseIndex];
      changingFocus.classList.remove("is-changing");
    }, 250);
  }, 2400);
}

// Make Studies, Work, and Tools slide in when the visitor scrolls.
const storySections = document.querySelectorAll(".story");

const storyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // When a section is visible, slide it in.
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      } else {
        // When it leaves the screen, reset it so it can animate again.
        entry.target.classList.remove("is-visible");
      }
    });
  },
  {
    threshold: 0.2, // Start when 20% of the section is on screen.
  }
);

storySections.forEach((section) => {
  section.classList.add("story-animate");
  storyObserver.observe(section);
});
