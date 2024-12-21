// Typewriter Effect Script
const lines = [
  "In the world of cyberspace...",
  "The System is Watching...",
  "But who's watching the system?",
  "The system watches, but it cannot see the shadows."
];

const typewriterElement = document.getElementById("typewriter");
const typingSpeed = 70; // Speed for typing (ms)
const deletingSpeed = 40; // Speed for deleting (ms)
const delayBetweenLines = 1500; // Delay between lines (ms)
let lineIndex = 0;
let charIndex = 0;

function typeWriter() {
  if (charIndex < lines[lineIndex].length) {
    typewriterElement.textContent += lines[lineIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, typingSpeed);
  } else {
    setTimeout(deleteWriter, delayBetweenLines);
  }
}

function deleteWriter() {
  if (charIndex > 0) {
    typewriterElement.textContent = lines[lineIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteWriter, deletingSpeed);
  } else {
    lineIndex = (lineIndex + 1) % lines.length;
    setTimeout(typeWriter, delayBetweenLines);
  }
}

// Start the typewriter animation
typeWriter();

