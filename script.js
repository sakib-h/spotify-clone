// Initialize the variables
let songIndex = 0;
let audioElement = new Audio("./songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songs = [
	{
		songName: "Let me Love You - DJ Snake",
		filePath: "songs/1.mp3",
		cover: "covers/1.jpg",
	},
	{
		songName: "Unstoppable - Sia",
		filePath: "songs/2.mp3",
		cover: "covers/2.jpg",
	},
	{
		songName: "Girls Like You - Maroon 5",
		filePath: "songs/3.mp3",
		cover: "covers/3.jpg",
	},
	{
		songName: "Perfect - Ed Sheeran",
		filePath: "songs/4.mp3",
		cover: "covers/4.jpg",
	},
	{
		songName: "Memories - Maroon 5",
		filePath: "songs/5.mp3",
		cover: "covers/5.jpg",
	},
	{
		songName: "Cheap Thriills - Sia",
		filePath: "songs/6.mp3",
		cover: "covers/6.jpg",
	},
	{
		songName: "Shape of You - Ed Sheeran",
		filePath: "songs/7.mp3",
		cover: "covers/7.jpg",
	},
	{
		songName: "Love me like you do - Ellie Goulding",
		filePath: "songs/8.mp3",
		cover: "covers/8.jpg",
	},
	{
		songName: "We don't talk anymore - Charlie Puth",
		filePath: "songs/9.mp3",
		cover: "covers/9.jpg",
	},
	{
		songName: "Let me down slowly - Alec Benjamin",
		filePath: "songs/10.mp3",
		cover: "covers/10.jpg",
	},
];

songItems.forEach((element, i) => {
	element.getElementsByTagName("img")[0].src = songs[i].cover;
	element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Handle play/pause click
masterPlay.addEventListener("click", () => {
	if (audioElement.paused || audioElement.currentTime <= 0) {
		audioElement.play();
		masterPlay.classList.remove("fa-play-circle");
		masterPlay.classList.add("fa-pause-circle");
		gif.style.opacity = "1";
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
