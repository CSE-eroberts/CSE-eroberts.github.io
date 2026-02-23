const moods = {
    happy: {
        "Happy by Pharrell Williams": "7maJOI3QMu0",
        "Don't Stop Me Now by Queen": "HgzGwKwLmgM",
        "Can't Stop the Feeling by Justin Timberlake": "ru0K8uYEZWw",
        "Don't Worry Be Happy by Bobby McFerrin": "d-diB65scQU",
        "I'm Walking on Sunshine by Katrina & the Waves": "iPUmE-tne5U"
    },
    sad: {
        "Someone Like You by Adele": "hLQl3WQQoQ0",
        "When I Was Your Man by Bruno Mars": "ekzHIouo8Q4",
        "Fix You by Coldplay": "k4V3Mo61fJM",
        "Everybody Hurts by R.E.M.": "5rOiW_xY-kc",
        "The Night We Met by Lord Huron": "KtlgYxa6BMU"
    }
};

const moodSelect = document.getElementById("mood-select");
const songList = document.getElementById("song-list");
const videoWrap = document.getElementById("video-wrap");
const songVideo = document.getElementById("song-video");

const hideVideo = () => {
    songVideo.src = "";
    videoWrap.classList.add("hidden");
};

const showVideo = (videoId) => {
    songVideo.src = `https://www.youtube.com/embed/${videoId}`;
    videoWrap.classList.remove("hidden");
};

const renderSongs = (moodName) => {
    songList.innerHTML = "";
    hideVideo();

    if (!moodName || !moods[moodName]) {
        return;
    }

    Object.entries(moods[moodName]).forEach(([songName, videoId]) => {
        const li = document.createElement("li");
        const songLink = document.createElement("a");

        songLink.href = "#";
        songLink.textContent = songName;
        songLink.addEventListener("click", (event) => {
            event.preventDefault();
            showVideo(videoId);
        });

        li.append(songLink);
        songList.append(li);
    });
};

moodSelect.addEventListener("change", (event) => {
    renderSongs(event.currentTarget.value);
});
