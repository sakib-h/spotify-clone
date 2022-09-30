// Initialize the variables
let songIndex = 0;
let audioElement = new Audio("./songs/1.mp3");
console.log(audioElement);
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songs = [
	{
		songName: "Let me Love You",
		filePath: "songs/1.mp3",
		cover: "covers/1.jpg",
	},
	{
		songName: "Let me Love You",
		filePath: "songs/2.mp3",
		cover: "covers/2.jpg",
	},
	{
		songName: "Let me Love You",
		filePath: "songs/3.mp3",
		cover: "covers/3.jpg",
	},
	{
		songName: "Let me Love You",
		filePath: "songs/4.mp3",
		cover: "covers/4.jpg",
	},
	{
		songName: "Let me Love You",
		filePath: "songs/5.mp3",
		cover: "covers/5.jpg",
	},
	{
		songName: "Let me Love You",
		filePath: "songs/5.mp3",
		cover: "covers/5.jpg",
	},
	{
		songName: "Let me Love You",
		filePath: "songs/6.mp3",
		cover: "covers/6.jpg",
	},
	{
		songName: "Let me Love You",
		filePath: "songs/7.mp3",
		cover: "covers/7.jpg",
	},
	{
		songName: "Let me Love You",
		filePath: "songs/8.mp3",
		cover: "covers/8.jpg",
	},
	{
		songName: "Let me Love You",
		filePath: "songs/9.mp3",
		cover: "covers/9.jpg",
	},
	{
		songName: "Let me Love You",
		filePath: "songs/10.mp3",
		cover: "covers/10.jpg",
	},
];

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
myProgressBar.addEventListener("timeupdate", () => {
	console.log("Time update");
	// Update Seeker
});
