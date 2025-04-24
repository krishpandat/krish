
//this is a simple game where a player can move left and right and jump on a platform.
/*let canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = "black";
const context = canvas.getContext("2d");

let gravity = 0.3;

// CLASS OF PLAYER
class player {
    constructor() {
        this.position = { x: 100, y: 100 };
        this.velocity = { x: 0, y: 0 };
        this.width = 60;
        this.height = 60;
    }

    draw() {
        context.fillStyle = "white"; // Set player color
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    playerMovement() {
        // Apply gravity
        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0; // Stop falling when hitting the ground
        } else {
            this.velocity.y += gravity; // Apply gravity
        }

        this.position.y += this.velocity.y; // Update position

    }



}
// Event listener for keyboard input
addEventListener("keydown", function (e) {
    if (e.key == "ArrowRight") {
        playerFigure.position.x += 10; // Move right

    }
    if (e.key == "ArrowLeft") {
        playerFigure.position.x += -10; // Move left

    } else if (e.key == "ArrowUp") {
        if (playerFigure.velocity.y == 0) {
            playerFigure.velocity.y = -15; // Jump
        }
    }
}
);

// Animation loop
function gameAnimation() {
    requestAnimationFrame(gameAnimation);
    context.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
    playerFigure.playerMovement(); // Update player movement
    playerFigure.draw(); // Redraw player
}

const playerFigure = new player();
gameAnimation();

//PLATFORM CLASS
class platform {
    constructor() {
        this.position = { x: 300, y: 300 };

        this.width = 60;
        this.height = 60;
    }

    draw() {
        context.fillStyle = "white"; // Set platform color
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
    //COLLISION DETECTION
    checkCollision(platformFigure) {
        if (
            (this.position.x + this.width) >= platformFigure.position.x &&
            this.position.x <= (platformFigure.position.x + platformFigure.width) &&
            (this.position.y + this.height) >= platformFigure.position.y &&
            this.position.y <= (platformFigure.position.y + platformFigure.height)
        ) {
            this.velocity.y = 0;
            this.position.y = platformFigure.position.y - this.height;
        }
    }
}
function gameAnimation() {
    requestAnimationFrame(gameAnimation);
    context.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
const platformFigure = new platform(); // Create a platform instance
platformFigure.draw(); // Draw platform
    platform.checkCollision(playerFigure); // Check for collision with the player

    playerFigure.playerMovement(); // Update player movement
    playerFigure.draw(); // Redraw player

}*/
let canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = "black";
const context = canvas.getContext("2d");

let gravity = 0.2;

// CLASS OF PLAYER
class player {
    constructor() {
        this.position = { x: 100, y: 100 };
        this.velocity = { x: 0, y: 0 };
        this.width = 60;
        this.height = 60;
    }

    draw() {
        context.fillStyle = "white"; // Set player color
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    playerMovement() {
        // Apply gravity
        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0; // Stop falling when hitting the ground
        } else {
            this.velocity.y += gravity; // Apply gravity
        }

        this.position.y += this.velocity.y; // Update position
    }
}

// CLASS OF PLATFORM
class Platform {
    constructor(x, y, width, height) {
        this.position = { x, y };
        this.width = width;
        this.height = height;
    }

    draw() {
        context.fillStyle = "gray"; // Set platform color
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

// Collision detection function
function isColliding(player, platform) {
    const collisionDetected = (
        player.position.y + player.height <= platform.position.y &&
        player.position.y + player.height + player.velocity.y >= platform.position.y &&
        player.position.x + player.width > platform.position.x &&
        player.position.x < platform.position.x + platform.width
    );

    if (collisionDetected) {
        player.velocity.y = 0;
    }

    return collisionDetected;
}

// Event listener for keyboard input
addEventListener("keydown", function (e) {
    if (e.key == "ArrowRight") {
        playerFigure.position.x += 10; // Move right
    }
    if (e.key == "ArrowLeft") {
        playerFigure.position.x += -10; // Move left
    } else if (e.key == "ArrowUp") {
        if (playerFigure.velocity.y == 0) {
            playerFigure.velocity.y = -15; // Jump
        }
    }
});

// Animation loop
function gameAnimation() {
    requestAnimationFrame(gameAnimation);
    context.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

    platform.draw(); // Draw platform

    // Check for collision with platform
    if (isColliding(playerFigure, platform)) {
        playerFigure.velocity.y = 0; // Stop falling
        playerFigure.position.y = platform.position.y - playerFigure.height; // Align player on platform
    } else {
        playerFigure.playerMovement(); // Apply gravity if not colliding
    }

    playerFigure.draw(); // Redraw player
}

const playerFigure = new player();
const platform = new Platform(200, 300, 200, 20); // Create a platform
gameAnimation();


