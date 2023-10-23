document.addEventListener("keydown", movePlayer);

var player = document.getElementById("player");
var goal = document.querySelector(".goal");
var stepSize = 20;

function generateObstacles() {
    for (var i = 0; i < 200; i++) {
        var obstacle = document.createElement("div");
        obstacle.className = "obstacle";

        do {
            var topPosition = Math.floor(Math.random() * 21);
            var leftPosition = Math.floor(Math.random() * 38);
        } while (
            (topPosition === 0 && leftPosition === 0) ||
            (topPosition === 20 && leftPosition === 37)
        );

        obstacle.style.top = topPosition * stepSize + "px";
        obstacle.style.left = leftPosition * stepSize + "px";

        document.getElementById("labyrinth").appendChild(obstacle);
    }
}
generateObstacles();

function movePlayer(e) {
    var top = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    var left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));

    switch (e.key) {
        case "ArrowUp":
            if (top - stepSize >= 0) {
                player.style.top = (top - stepSize) + "px";
            }
            break;
        case "ArrowDown":
            if (top + stepSize <= 520) {
                player.style.top = (top + stepSize) + "px";
            }
            break;
        case "ArrowLeft":
            if (left - stepSize >= 0) {
                player.style.left = (left - stepSize) + "px";
            }
            break;
        case "ArrowRight":
            if (left + stepSize <= 980) {
                player.style.left = (left + stepSize) + "px";
            }
            break;
    }

    checkCollision();
}

function checkCollision() {
    var obstacles = document.querySelectorAll(".obstacle");
    for (var i = 0; i < obstacles.length; i++) {
        var obstacle = obstacles[i];
        var playerRect = player.getBoundingClientRect();
        var obstacleRect = obstacle.getBoundingClientRect();

        if (
            playerRect.left < obstacleRect.right &&
            playerRect.right > obstacleRect.left &&
            playerRect.top < obstacleRect.bottom &&
            playerRect.bottom > obstacleRect.top
        ) {
            alert("Vous avez touché un obstacle, recommencez");
            resetGame();
        }
    }

    var playerRect = player.getBoundingClientRect();
    var goalRect = goal.getBoundingClientRect();

    if (
        playerRect.left < goalRect.right &&
        playerRect.right > goalRect.left &&
        playerRect.top < goalRect.bottom &&
        playerRect.bottom > goalRect.top
    ) {
        alert("- - 32 - - - -");
        resetGame();
    }
}

function resetGame() {
    player.style.top = "0";
    player.style.left = "0";
}
