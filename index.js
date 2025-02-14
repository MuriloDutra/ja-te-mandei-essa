const songs = [
  {
    name: "ei, coisinha!",
    artist: "Clara Valverde",
    image: "images/ei-coisinha.jpeg",
  },
  {
    name: "Alegre Menina",
    artist: "Dori Caymmi",
    image: "images/alegre-menina.jpg",
  },
  {
    name: "Mutante",
    artist: "Rita Lee",
    image: "images/mutante.jpg",
  },
  {
    name: "Tatuagem",
    artist: "Chico Buarque",
    image: "images/tatuagem.jpg",
  },
  {
    name: "burburinho",
    artist: "Clara Valverde",
    image: "images/ei-coisinha.jpeg",
  },
  {
    name: "Baby 95",
    artist: "Liniker",
    image: "images/baby95.jpg",
  },
  {
    name: "Muito",
    artist: "Caetano Veloso",
    image: "images/muito.jpg",
  },
  {
    name: "La Belle De Jour",
    artist: "Alceu Valença",
    image: "images/la-belle-de-jour.jpg",
  },
  {
    name: "Sick Love",
    artist: "Red Hot Chili Peppers",
    image: "images/sick-love.jpg",
  },
];

function isTouchDevice() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

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

function toggleSongCard(song) {
  const match = songs.find(({ name }) => name == song);

  const songName = document.getElementById("song-name");
  const artist = document.getElementById("artist");
  const songImage = document.getElementById("song-image");

  songName.textContent = match.name;
  artist.textContent = match.artist;
  songImage.src = match.image;
  songImage.alt = `${match.artist} | ${match.name}`;

  const showMusicClassName = "show-music-card";
  const hideMusicClassName = "hide-music-card";
  const musicContainer = document.querySelector(".music-container");

  if (musicContainer.classList.contains(showMusicClassName)) {
    musicContainer.classList.add(hideMusicClassName);
    musicContainer.classList.remove(showMusicClassName);
  } else {
    musicContainer.classList.add(showMusicClassName);
    musicContainer.classList.remove(hideMusicClassName);
  }
}

function handleSelectedSong(song, isOnClick) {
  const songAlreadyBeingDisplayed = document.querySelector(".show-music-card");

  if (isTouchDevice() && isOnClick && !songAlreadyBeingDisplayed) {
    toggleSongCard(song);
    setTimeout(() => toggleSongCard(song), [2300]);
  } else if (!isTouchDevice() && !isOnClick) toggleSongCard(song);
}
