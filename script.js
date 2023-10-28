socket = io()
var seasons = "Summer"
var n = 15
var m = 15
var side = 60;

const grCount = document.getElementById("grCount")
const grEaten = document.getElementById("grEaten")

function setup() {
    frameRate(5);
    createCanvas(n * side, m * side);
    background('#acacac');
}

function drawGame(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] === 1) {
                if (seasons === "Summer") {
                    fill("green");
                } else if (seasons === "Winter") {
                    fill("#088F8F")
                }
                else if (seasons === "Autmn") {
                    fill("orange")
                }
                else if (seasons === "Spring") {
                    fill("#a3eb52")
                }
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] === 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] === 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] === 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] === 4) {
                fill("purple");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] === 5) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] === 6) {
                fill("brown");
                rect(x * side, y * side, side, side);
            }
        }
    }
}

const winterBtn = document.getElementById("Winter")
winterBtn.addEventListener("click", function() {
    seasons = "Winter"
    console.clear();
    console.log("It's WINTER")
    frameRate(1);
    
})
const summerBtn = document.getElementById("Summer")
summerBtn.addEventListener("click", function() {
    seasons = "Summer"
    console.clear();
    console.log("It's SUMMER")
})
const springBtn = document.getElementById("Spring")
springBtn.addEventListener("click", function() {
    seasons = "Spring"
    console.clear();
    console.log("It's SPRING")
})
const autmnBtn = document.getElementById("Autmn")
autmnBtn.addEventListener("click", function() {
    seasons = "Autmn"
    console.clear();
    console.log("It's AUTMN")
    frameRate(7);
    
})

console.log("choose season")
socket.on("matrix", drawGame)

socket.on("grassEaten", (grassEaten) => {
    grEaten.innerText = "Grass Eaten count:" + grassEaten
})
