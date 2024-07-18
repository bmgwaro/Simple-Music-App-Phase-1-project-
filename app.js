const url = "https://json-server-vercel-u13o.vercel.app/songs";

document.addEventListener("DOMContentLoaded", () => {
  fetch(`${url}/2`)
    .then((res) => res.json())
    .then((data) => displaySong(data));
});

fetch(`${url}`)
  .then((res) => res.json())
  .then((data) => displaySongList(data))
  .then((data) => addNewSong(data));

function displaySongList(songList) {
  const songs = document.getElementById("songNames");

  songList.forEach((song) => {
    let eachSong = document.createElement("li");
    eachSong.textContent = song.name;
    songs.classList.add("slide-in");
    songs.appendChild(eachSong);
    eachSong.addEventListener("click", (event) => {
      event.preventDefault();
      fetch(`${url}/${song.id}`)
        .then((res) => res.json())
        .then((data) => displaySong(data));
    });

    eachSong.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "#f0f0f0";
    });

    eachSong.addEventListener("mouseout", (event) => {
      event.target.style.backgroundColor = "";
    });
  });
}

function displaySong(song) {
  const name = document.getElementById("name");
  const vid = document.getElementById("link");
  const artist = document.getElementById("artist");
  const genre = document.getElementById("genre");

  name.textContent = song.name;
  vid.src = song.link;
  artist.textContent = song.artist;
  genre.textContent = song.genre;

  const downloaded = document.getElementById("downloaded");
  downloaded.innerHTML = "";

  downloadSong();
}

function downloadSong() {
  const download = document.getElementById("download");

  download.addEventListener("click", (event) => {
    event.preventDefault();
    const downloaded = document.getElementById("downloaded");
    downloaded.textContent = "This song has been downloaded succesfully.";
  });
}

function handleSubmit() {
  const newSong = document.getElementById("songForm");

  newSong.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = {
      name: document.getElementById("nameInput").value,
      artist: document.getElementById("artistInput").value,
      genre: document.getElementById("genreInput").value,
      link: document.getElementById("linkInput").value,
    };

    fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((newSong) => {
        const songsList = document.getElementById("songNames");
        const newSongItem = document.createElement("li");
        newSongItem.textContent = newSong.name;
        songsList.appendChild(newSongItem);

        newSongItem.addEventListener("click", (event) => {
          event.preventDefault();
          fetch(`${url}/${newSong.id}`)
            .then((res) => res.json())
            .then((data) => displaySong(data));
        });

        document.getElementById("songForm").reset();

        newSongItem.addEventListener("mouseover", (event) => {
          event.target.style.backgroundColor = "#f0f0f0";
        });

        newSongItem.addEventListener("mouseout", (event) => {
          event.target.style.backgroundColor = "";
        });
      })
      .catch((error) => console.log(error));
  });
}

function addNewSong() {
  const newSong = document.getElementById("songForm");

  newSong.removeEventListener("submit", handleSubmit);
  newSong.addEventListener("submit", handleSubmit);
}
