
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

/*
let canvas = document.querySelector("#canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = "black";
const context = canvas.getContext("2d");

let gravity = 0.3;

// CLASS OF PLAYER
class player {
    constructor() {
        this.position = { x: 150, y: 100 };
        this.velocity = { x: 0, y: 0 };
        this.width = 5;
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
    player.position.y + player.height <= platform.position.y &&
    player.position.y + player.height + player.velocity.y >= platform.position.y &&
    player.position.x + player.width > platform.position.x &&
    player.position.x < platform.position.x + platform.width;
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
    platform1.draw(); //Draw platform1
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
const platform = new Platform(100, 500, 200, 20); // Create a platform
const platform1 = new Platform(600, 550, 150, 50); // Create a platform1
gameAnimation();

*/

/*
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

    // Collision Detection
    checkCollision(platform) {
        if (
            this.position.y + this.height >= platform.position.y &&
            this.position.y + this.height + this.velocity.y >= platform.position.y &&
            this.position.x + this.width > platform.position.x &&
            this.position.x < platform.position.x + platform.width
        ) {
            this.velocity.y = 0; // Stop falling
            this.position.y = platform.position.y - this.height; // Align player on platform
        }
    }

    // Prevent Passing Through Platform
    preventPassThrough(platform) {
        if (
            this.position.x + this.width > platform.position.x &&
            this.position.x < platform.position.x + platform.width &&
            this.position.y + this.height > platform.position.y
        ) {
            if (this.position.x < platform.position.x) {
                this.position.x = platform.position.x - this.width; // Stop player on the left
            } else if (this.position.x + this.width > platform.position.x + platform.width) {
                this.position.x = platform.position.x + platform.width; // Stop player on the right
            }
        }
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
    return (
        player.position.y + player.height <= platform.position.y &&
        player.position.y + player.height + player.velocity.y >= platform.position.y &&
        player.position.x + player.width > platform.position.x &&
        player.position.x < platform.position.x + platform.width
    );
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

    platform1.draw(); // Draw first platform
    platform2.draw(); // Draw second platform

    // Check for collision with platforms
    playerFigure.checkCollision(platform1);
    playerFigure.checkCollision(platform2);

    // Prevent passing through the second platform
    playerFigure.preventPassThrough(platform2);

    playerFigure.playerMovement(); // Update player movement
    playerFigure.draw(); // Redraw player
}

const playerFigure = new player();
const platform1 = new Platform(200, 300, 200, 20); // Create the first platform
const platform2 = new Platform(400, 200, 300, 20); // Create the second platform with larger width
gameAnimation();

*/

let canvas = document.querySelector("#canvas");
canvas.width = innerWidth;
canvas.height = innerHeight;
//canvas.style.background = "black";
canvas.style.backgroundImage = "url('../images/back5.jpg')";
canvas.style.backgroundSize = "cover";
const context = canvas.getContext("2d");

let gravity = 0.9 ;

// CLASS OF PLAYER
class Player {
    constructor() {
        this.position = { x: 100, y: 100 };
        this.velocity = { x: 0, y: 0 };
        this.width = 60;
        this.height = 60;
        this.isJumping = false;
    }

    draw() {
        context.fillStyle = "blue"; // Mario's color
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }

    update() {
        this.draw();
        this.position.y += this.velocity.y;

        // Apply gravity
        if (this.position.y + this.height < canvas.height) {
            this.velocity.y += gravity;
        } else {
            this.velocity.y = 0;
            this.isJumping = false; // Reset jumping when on the ground
        }
    }

    jump() {
        if (!this.isJumping) {
            this.velocity.y = -25; // Jump velocity
            this.isJumping = true;
        }
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
        context.fillStyle = "gray"; // Platform color
        context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
}

// Collision detection function
function isColliding(player, platform) {
    return (
        player.position.y + player.height <= platform.position.y &&
        player.position.y + player.height + player.velocity.y >= platform.position.y &&
        player.position.x + player.width > platform.position.x &&
        player.position.x < platform.position.x + platform.width
    );
}

// Initialize player and platforms
const player = new Player();
const platforms = [
    new Platform(200, 500, 200, 20),//PLATFORM 2
    new Platform(500, 400, 200, 20),//PLATFORM 3
    new Platform(800, 300, 200, 20),//PLATFORM 1
];

// PLAYER MOVEMENT

addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        player.position.x += 10; // Move right
    }
    if (e.key === "ArrowLeft") {
        player.position.x -= 10; // Move left
    }
    if (e.key === "ArrowUp") {
        player.jump(); // Jump
    }
});

// Animation loop
function gameAnimation() {
    requestAnimationFrame(gameAnimation);
    context.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

    // Draw platforms
    platforms.forEach((platform) => {
        platform.draw();

        // Check for collision with player
        if (isColliding(player, platform)) {
            player.velocity.y = 0; // Stop falling
            player.position.y = platform.position.y - player.height; // Align player on platform
            player.isJumping = false; // Allow jumping again
        }
    });

    player.update(); // Update player position
}

gameAnimation();