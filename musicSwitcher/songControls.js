var currentSong = 0;
var isPlaying = false;
updateSong();

function updateSong(){
    fetch('./musicSwitcher/songs.json')
        .then(response => response.json())
        .then(songs => {
            
            var song = songs.find(item => item.number === currentSong);

            var title = song.name;
            var artist = song.artist;
            var albumCover = song.albumCover;
            var link = song.link_to_song;

            document.getElementById("albumCover").src = albumCover;
            document.getElementById("songTitle").innerText = title;
            document.getElementById("songArtist").innerText = artist;
            
            document.getElementById("musicPlayer").src = link;
            document.getElementById("musicPlayer").load();
            document.getElementById("musicPlayer").pause();
            stopAnimation();
            isPlaying = false;
        })
        .catch(error => {
            console.error('Error loading JSON:', error);
        });
}

function nextSong(){
    currentSong++;
    if (currentSong == 14){
        currentSong = 0;
    }
    updateSong();
}

function previousSong(){
    currentSong--;
    if (currentSong == -1){
        currentSong = 13;
    }
    updateSong();
}

function playing(){
    isPlaying = !isPlaying
    if (isPlaying == true){
        document.getElementById("vinylTemplate").style.animation = "rotate 20s infinite linear";
        document.getElementById("musicPlayer").load();
        document.getElementById("musicPlayer").play();
    }
    else{
        stopAnimation();
    }
}

function stopAnimation(){
    document.getElementById("vinylTemplate").style.animation = "";
    document.getElementById("musicPlayer").pause();
}