let targetColor = "";
let score = 0;
let time = 30;
let timer;
let colors = [
	"red",
	"orange",
	"red",
	"green",
	"black",
	"gray",
	"hotpink",
	"purple",
	"white",
	"yellow",
	"lightgreen",
	"maroon",
	"khaki",
	"brown",
	"navy",
	"indigo",
];

const grid = document.getElementById("grid");
const targetColorDisplay = document.getElementById("target-color");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");

function suffleArray(colors) {
	for (let i = colors.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[colors[i], colors[j]] = [colors[j], colors[i]];
	}

	return colors;
}

function createGrid() {
	grid.innerHTML = "";
	colors = suffleArray(colors);
	console.log(colors);
	targetColor = colors[Math.floor(Math.random() * 16)];
	targetColorDisplay.textContent = targetColor;

	colors.forEach((color) => {
		const box = document.createElement("div");
		box.className = "color-box";
		box.style.backgroundColor = color;
		box.addEventListener("click", () => {
			handleClick(color);
		});

		grid.appendChild(box);
	});
}

function handleClick(clickedColor) {
	if (clickedColor === targetColor) {
		score++;
		scoreDisplay.textContent = score;
		createGrid();
	}
}

function startGame() {
	time = 30;
	score = 0;
	scoreDisplay.textContent = score;
	timeDisplay.textContent = time;

	createGrid();

	clearInterval(timer);

	timer = setInterval(() => {
		time--;
		timeDisplay.textContent = time;

		if (time === 0) {
			clearInterval(timer);
			alert("⏳Time's Up!! Your Score is : " + score);
		}
	}, 1000);
}
