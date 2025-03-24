const accordions = document.querySelectorAll(".FAQsSection1");

accordions.forEach((accordion) => {
  const question = accordion.querySelector(".quest1");
  const questionImg = accordion.querySelector(".questImg");

  question.addEventListener("click", function () {
    question.classList.toggle("active");

    if (question.classList.contains("active")) {
      questionImg.src = "/assets/images/icon-minus.svg";
    } else {
      questionImg.src = "/assets/images/icon-plus.svg";
    }

    // Close all other accordions before opening the clicked one
    accordions.forEach((otherAccordion) => {
      const otherQuestion = otherAccordion.querySelector(".quest1");
      const otherImg = otherAccordion.querySelector(".questImg");

      if (otherQuestion !== question) {
        otherQuestion.classList.remove("active");
        otherImg.src = "/assets/images/icon-plus.svg"; // Reset icon to plus
      }
    });
  });
});
