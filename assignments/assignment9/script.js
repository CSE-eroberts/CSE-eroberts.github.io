class Song {
    constructor(title, artist, album, year, genre, coverArt, youtubeCode) {
        this.title = title;
        this.artist = artist;
        this.album = album;
        this.year = year;
        this.genre = genre;
        this.coverArt = coverArt;
        this.youtubeCode = youtubeCode;
    }

    coverArtPath() {
        return `images/${this.coverArt}`;
    }

    getCard(onClick) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "song-card";
        button.setAttribute("aria-label", `Open details for ${this.title} by ${this.artist}`);

        button.innerHTML = `
            <header class="song-head">
                <h3>${this.title}</h3>
                <p>By ${this.artist}</p>
            </header>
            <div class="cover-wrap">
                <img src="${this.coverArtPath()}" alt="${this.album} cover art">
            </div>
        `;

        button.addEventListener("click", () => onClick(this));
        return button;
    }

    youtubeEmbedUrl() {
        return `https://www.youtube.com/embed/${this.youtubeCode}`;
    }

    albumWithYear() {
        return `${this.album}, ${this.year}`;
    }

    detailItems() {
        return [
            { className: "lead", value: `by ${this.artist}` },
            { value: this.albumWithYear() },
            { value: this.genre }
        ];
    }

    getInfoMarkup() {
        return this.detailItems()
            .map(
                ({ className = "", value }) => `
                    <p class="${className}">${value}</p>
                `
            )
            .join("");
    }
}

const songs = [
    new Song(
        "Two-Headed Boy",
        "Neutral Milk Hotel",
        "In the Aeroplane Over the Sea",
        1998,
        "Indie Folk",
        "twoheadedboy.jpeg",
        "TudLjZ_4VhU"
    ),
    new Song(
        "Jailhouse Rock",
        "Elvis Presley",
        "Jailhouse Rock",
        1957,
        "Rock and Roll",
        "jailhouserock.jpeg",
        "gj0Rz-uP4Mk"
    ),
    new Song(
        "So What",
        "Miles Davis",
        "Kind of Blue",
        1959,
        "Jazz",
        "sowhat.jpeg",
        "ylXk1LBvIqU"
    ),
    new Song(
        "Jolene",
        "Dolly Parton",
        "Jolene",
        1974,
        "Country",
        "jolene.jpeg",
        "Ixrje2rXLMA"
    )
];

const dom = {
    gallery: document.getElementById("song-gallery"),
    modal: document.getElementById("song-modal"),
    closeBtn: document.getElementById("modal-close"),
    video: document.getElementById("modal-video"),
    title: document.getElementById("modal-title"),
    info: document.getElementById("modal-info")
};

const populateModal = (song) => {
    dom.title.textContent = song.title;
    dom.info.innerHTML = song.getInfoMarkup();
    dom.video.src = song.youtubeEmbedUrl();
};

const openModal = (song) => {
    populateModal(song);
    dom.modal.style.display = "block";
    dom.modal.setAttribute("aria-hidden", "false");
};

const closeModal = () => {
    dom.modal.style.display = "none";
    dom.modal.setAttribute("aria-hidden", "true");
    dom.video.src = "";
    dom.info.innerHTML = "";
};

const renderSongs = () => {
    songs.forEach((song) => {
        dom.gallery.append(song.getCard(openModal));
    });
};

renderSongs();

dom.closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", (event) => {
    if (event.target === dom.modal) {
        closeModal();
    }
});

window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && dom.modal.style.display === "block") {
        closeModal();
    }
});
