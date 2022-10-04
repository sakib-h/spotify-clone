// Initialize the variables
let songIndex = 1;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songItemPlay = Array.from(document.getElementsByClassName("songItemPlay"));
let songTitle = document.getElementById("songTitle");
let songDuration = document.getElementById("songDuration");
let songs = [
	{
		songName: "Let me Love You - DJ Snake",
		filePath: "songs/1.mp3",
		cover: "covers/1.jpg",
		duration: "3:25",
	},
	{
		songName: "Unstoppable - Sia",
		filePath: "songs/2.mp3",
		cover: "covers/2.jpg",
		duration: "3:46",
	},
	{
		songName: "Girls Like You - Maroon 5",
		filePath: "songs/3.mp3",
		cover: "covers/3.jpg",
		duration: "4:30",
	},
	{
		songName: "Perfect - Ed Sheeran",
		filePath: "songs/4.mp3",
		cover: "covers/4.jpg",
		duration: "4:39",
	},
	{
		songName: "Memories - Maroon 5",
		filePath: "songs/5.mp3",
		cover: "covers/5.jpg",
		duration: "3:15",
	},
	{
		songName: "Cheap Thriills - Sia",
		filePath: "songs/6.mp3",
		cover: "covers/6.jpg",
		duration: "4:21",
	},
	{
		songName: "Shape of You - Ed Sheeran",
		filePath: "songs/7.mp3",
		cover: "covers/7.jpg",
		duration: "4:23",
	},
	{
		songName: "Love me like you do - Ellie Goulding",
		filePath: "songs/8.mp3",
		cover: "covers/8.jpg",
		duration: "4:09",
	},
	{
		songName: "We don't talk anymore - Charlie Puth",
		filePath: "songs/9.mp3",
		cover: "covers/9.jpg",
		duration: "3:50",
	},
	{
		songName: "Let me down slowly - Alec Benjamin",
		filePath: "songs/10.mp3",
		cover: "covers/10.jpg",
		duration: "2:57",
	},
];

// Handle DOM input
songItems.forEach((element, i) => {
	element.getElementsByTagName("img")[0].src = songs[i].cover;
	element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
	element.getElementsByClassName("duration")[0].innerText = songs[i].duration;
});

// Handle play/pause click
masterPlay.addEventListener("click", () => {
	if (audioElement.paused || audioElement.currentTime <= 0) {
		audioElement.play();
		masterPlay.classList.remove("fa-play-circle");
		masterPlay.classList.add("fa-pause-circle");
		gif.style.opacity = "1";
		songTitle.innerText = songs[songIndex - 1].songName;
		songDuration.innerText = songs[songIndex - 1].duration;
	} else {
		audioElement.pause();
		masterPlay.classList.remove("fa-pause-circle");
		masterPlay.classList.add("fa-play-circle");
		gif.style.opacity = "0";
	}
});

// Listen to events
audioElement.addEventListener("timeupdate", () => {
	// Update Seeker
	progress = parseInt(
		(audioElement.currentTime / audioElement.duration) * 100
	);
	myProgressBar.value = progress;
});
// Update song based on seeker
myProgressBar.addEventListener("change", () => {
	audioElement.currentTime =
		(myProgressBar.value * audioElement.duration) / 100;
});
const makeAllPause = () => {
	songItemPlay.forEach((element) => {
		element.classList.remove("fa-pause-circle");
		element.classList.add("fa-play-circle");
	});
};

songItemPlay.forEach((element) => {
	element.addEventListener("click", (e) => {
		if (e.target.classList == "songItemPlay far fa-play-circle") {
			makeAllPause();
			songIndex = parseInt(e.target.id);
			audioElement.src = `songs/${songIndex}.mp3`;
			audioElement.currentTime = 0;
			audioElement.play();
			e.target.classList.remove("fa-play-circle");
			e.target.classList.add("fa-pause-circle");
			masterPlay.classList.remove("fa-play-circle");
			masterPlay.classList.add("fa-pause-circle");
			songTitle.innerText = songs[songIndex - 1].songName;
			gif.style.opacity = "1";
			songDuration.innerText = songs[songIndex - 1].duration;
		} else {
			audioElement.pause();
			e.target.classList.remove("fa-pause-circle");
			e.target.classList.add("fa-play-circle");
			masterPlay.classList.remove("fa-pause-circle");
			masterPlay.classList.add("fa-play-circle");
			gif.style.opacity = "0";
		}
	});
});

// Handle next/previous click

document.getElementById("next").addEventListener("click", () => {
	if (songIndex >= 10) {
		songIndex = 1;
	} else {
		songIndex++;
	}
	audioElement.src = `songs/${songIndex}.mp3`;
	audioElement.currentTime = 0;
	audioElement.play();
	masterPlay.classList.remove("fa-play-circle");
	masterPlay.classList.add("fa-pause-circle");
	songTitle.innerText = songs[songIndex - 1].songName;
	gif.style.opacity = "1";
	songDuration.innerText = songs[songIndex - 1].duration;
});

document.getElementById("previous").addEventListener("click", () => {
	if (songIndex <= 1) {
		songIndex = 10;
	} else {
		songIndex--;
	}
	audioElement.src = `songs/${songIndex}.mp3`;
	audioElement.currentTime = 0;
	audioElement.play();
	masterPlay.classList.remove("fa-play-circle");
	masterPlay.classList.add("fa-pause-circle");
	songTitle.innerText = songs[songIndex - 1].songName;
	gif.style.opacity = "1";
	songDuration.innerText = songs[songIndex - 1].duration;
});
