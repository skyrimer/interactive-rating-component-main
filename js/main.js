const ratingForm = document.querySelector("form");
const card = document.querySelector(".card");
ratingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!event.target.checkValidity()) {
    card.classList.add("invalid");
    setTimeout(() => {
      card.classList.remove("invalid");
    }, 600);
    return;
  }
  const template = document
    .querySelector("[data-thanks-template]")
    .content.cloneNode(true);
  const formData = new FormData(ratingForm);
  template.querySelector("[data-rating]").textContent = formData.get("rating");
  card.classList.add("fade");
  setTimeout(() => {
    card.replaceChildren(template);
    card.classList.add("submitted");
    card.classList.remove("fade");
  }, 300)
  console.log("should work")
});
