const faqList = document.querySelector(".faq-list");
const questionButtons = document.querySelectorAll(".faq-question");

// Loop through each button and add the click listener as before
questionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Toggling logic from before
    const faqAnswer = button.nextElementSibling;
    const icon = button.querySelector("img");

    // Close other answers for an accordion effect
    closeAllOtherAnswers(button);

    // Toggle the active state and icon for the current button
    button.classList.toggle("active");
    faqAnswer.classList.toggle("hidden");

    if (faqAnswer.classList.contains("hidden")) {
      icon.src = "/assets/images/icon-plus.svg";
    } else {
      icon.src = "/assets/images/icon-minus.svg";
    }
  });
});

// New JavaScript for keyboard navigation
faqList.addEventListener("keydown", (event) => {
  const currentButton = document.activeElement;

  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    event.preventDefault(); // Prevents the page from scrolling

    // Find the index of the currently focused button
    const currentIndex = Array.from(questionButtons).indexOf(currentButton);
    let nextIndex;

    if (event.key === "ArrowDown") {
      // Move to the next button, or loop back to the first
      nextIndex = (currentIndex + 1) % questionButtons.length;
    } else if (event.key === "ArrowUp") {
      // Move to the previous button, or loop back to the last
      nextIndex =
        (currentIndex - 1 + questionButtons.length) % questionButtons.length;
    }

    // Set the focus to the next/previous button
    questionButtons[nextIndex].focus();
  }
});

// Helper function to close all other answers (same as before)
function closeAllOtherAnswers(currentButton) {
  questionButtons.forEach((otherButton) => {
    if (otherButton !== currentButton) {
      const otherAnswer = otherButton.nextElementSibling;
      const otherIcon = otherButton.querySelector("img");

      if (!otherAnswer.classList.contains("hidden")) {
        otherAnswer.classList.add("hidden");
        otherIcon.src = "/assets/images/icon-plus.svg";
      }
    }
  });
}
