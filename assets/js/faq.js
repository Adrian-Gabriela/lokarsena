const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const button = item.querySelector(".faq-button");
  const icon = button.querySelector(".material-icons");
  const answer = item.querySelector(".faq-answer");

  button.addEventListener("click", () => {

    faqItems.forEach((i) => {
      if (i !== item) {
        i.querySelector(".faq-answer").classList.add("hidden");
        i.querySelector(".material-icons").textContent = "add";
      }
    });


    answer.classList.toggle("hidden");
    icon.textContent = answer.classList.contains("hidden") ? "add" : "remove";
  });
});
