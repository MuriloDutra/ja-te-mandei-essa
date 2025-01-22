function handleEnvelopeClick() {
  const openLetterClasName = "open-letter";
  const closeLetterClasName = "close-letter";
  let main = document.querySelector("main");

  if (main.classList.contains("open-letter")) {
    main.classList.add(closeLetterClasName);
    main.classList.remove(openLetterClasName);
  } else {
    main.classList.add(openLetterClasName);
    main.classList.remove(closeLetterClasName);
  }
}

function handleLetterClick(event) {
  event.stopPropagation();
}
