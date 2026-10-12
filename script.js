let targetColor = "";
let score = 0;
let time = 30;
let timer;
let color = [
	"red",
	"orenge",
	"red",
	"green",
	"black",
	"gray",
	"hotpink",
	"purple",
	"white",
	"yello",
	"lightgreen",
	"maroon",
	"khaki",
	"brown",
	"navy",
	"indigo",
];

const grid = document.getElementById("grid");
const targetColorDisplay = Document.getElementById("target-color");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");

function startGame() {
	time = 30;
	score = 0;
	scoreDisplay.textContent = score;
	timeDisplay.textContent = time;
}
