document.getElementById("menu-toggle").addEventListener("click", function () {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active");
  });
  


  document.addEventListener("DOMContentLoaded", () => {
    const lines = [
      "Please email mchrysanthou33@gmail.com for more information!"
    ];

    const container = document.querySelector(".auto-type-container");

    let lineIndex = 0;
    let charIndex = 0;
    let currentLine = "";
    let currentElement;

    function typeLine() {
      if (lineIndex >= lines.length) return; // Done

      if (charIndex === 0) {
        currentLine = lines[lineIndex];
        currentElement = document.createElement("p");
        currentElement.className = "auto-type-line";
        container.appendChild(currentElement);
      }

      if (charIndex < currentLine.length) {
        currentElement.textContent += currentLine.charAt(charIndex);
        charIndex++;
        setTimeout(typeLine, 70); // typing speed
      } else {
        // Line complete, move to next
        lineIndex++;
        charIndex = 0;
        setTimeout(typeLine, 500); // pause before next line
      }
    }

    typeLine();
  });