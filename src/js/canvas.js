import platform from "../images/platform.png";
import background from "../images/background.png";
import hills from "../images/hills.png";
import platformSmallTall from "../images/platformSmallTall.png";
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 576;
const gravity = 0.5;

let scrollOffSet = 0;

class Player {
  constructor() {
    this.speed = 10;
    this.position = {
      x: 100,
      y: 100,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.width = 30;
    this.height = 30;
  }
  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
  update() {
    this.draw();
    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
    if (this.position.y + this.velocity.y + this.height <= canvas.height) {
      this.velocity.y += gravity;
    }
  }
}

class Platform {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y,
      image,
    };
    this.width = image.width;
    this.height = image.height;
    this.image = image;
  }
  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}

class GenericObject {
  constructor({ x, y, image }) {
    this.position = {
      x,
      y,
      image,
    };
    this.width = image.width;
    this.height = image.height;
    this.image = image;
  }
  draw() {
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}

function createImg(imgSrc) {
  const img = new Image();
  img.src = imgSrc;
  return img;
}

let platformImg = createImg(platform);
let platformSmallTallImg = createImg(platformSmallTall);
let backgroundImg = createImg(background);
let hillsImg = createImg(hills);
let player = new Player();
let platforms = [];

let genericObjects = [];
let keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
  up: {
    pressed: false,
  },
  down: {
    pressed: false,
  },
};

function init() {
  scrollOffSet = 0;

  function createImg(imgSrc) {
    const img = new Image();
    img.src = imgSrc;
    return img;
  }

  platformImg = createImg(platform);
  platformSmallTallImg = createImg(platformSmallTall);
  backgroundImg = createImg(background);
  hillsImg = createImg(hills);
  player = new Player();
  platforms = [
    new Platform({
      x: platformImg.width * 2.5,
      y: 360,
      image: platformSmallTallImg,
    }),
    new Platform({
      x: platformImg.width * 4 + 340,
      y: 360,
      image: platformSmallTallImg,
    }),
    new Platform({
      x: platformImg.width * 5 + 100,
      y: 200,
      image: platformSmallTallImg,
    }),
    new Platform({
      x: platformImg.width * 8 - 150,
      y: 360,
      image: platformSmallTallImg,
    }),
    new Platform({ x: -1, y: 460, image: platformImg }),
    new Platform({ x: platformImg.width + 100, y: 460, image: platformImg }),
    new Platform({
      x: platformImg.width * 3.5 + 50,
      y: 460,
      image: platformImg,
    }),
    new Platform({
      x: platformImg.width * 6 + 150,
      y: 460,
      image: platformImg,
    }),
    new Platform({
      x: platformImg.width * 7 + 150 - 10,
      y: 460,
      image: platformImg,
    }),
  ];

  genericObjects = [
    new GenericObject({ x: -1, y: -1, image: backgroundImg }),
    new GenericObject({ x: -1, y: -1, image: hillsImg }),
    new GenericObject({
      x: backgroundImg.width - 10,
      y: -1,
      image: backgroundImg,
    }),
    new GenericObject({ x: hillsImg.width - 10, y: -1, image: hillsImg }),
  ];
  keys = {
    right: {
      pressed: false,
    },
    left: {
      pressed: false,
    },
    up: {
      pressed: false,
    },
    down: {
      pressed: false,
    },
  };
}

function animate() {
  requestAnimationFrame(animate);
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach((genericObject) => {
    genericObject.draw();
  });
  platforms.forEach((platform) => {
    platform.draw();
  });
  player.update();
  platforms.forEach((platform) => {
    if (keys.right.pressed && player.position.x < 400) {
      player.velocity.x = player.speed;
    } else if (
      (keys.left.pressed && player.position.x > 100) ||
      (keys.left.pressed && scrollOffSet === 0 && player.position.x > 0)
    ) {
      player.velocity.x = -player.speed;
    } else {
      player.velocity.x = 0;
      if (keys.right.pressed) {
        scrollOffSet += player.speed;
        platform.position.x -= player.speed;
        genericObjects.forEach((genericObject) => {
          genericObject.position.x -= player.speed * 0.5;
        });
      } else if (keys.left.pressed && scrollOffSet > 0) {
        scrollOffSet -= player.speed;

        platform.position.x += player.speed;
        genericObjects.forEach((genericObject) => {
          genericObject.position.x += player.speed * 0.5;
        });
      }
    }
  });

  platforms.forEach((platform) => {
    if (
      player.position.y + player.height <= platform.position.y &&
      player.position.y + player.height + player.velocity.y >=
        platform.position.y &&
      (player.position.x + player.width >= platform.position.x) &
        (player.position.x <= platform.position.x + platform.width)
    ) {
      player.velocity.y = 0;
    }
  });

  if (scrollOffSet > platformImg.width * 7 + 150 - 10) {
    console.log("you win");
  }

  if (player.position.y > canvas.height) {
    init();
  }
}

init();
animate();

addEventListener("keydown", ({ keyCode }) => {
  switch (keyCode) {
    case 65:
      console.log("left");
      keys.left.pressed = true;
      break;
    case 83:
      console.log("down");
      break;
    case 68:
      console.log("right");
      keys.right.pressed = true;
      break;
    case 87:
      console.log("up");
      keys.up.pressed = true;
      player.velocity.y = -14;
      break;
  }
});

addEventListener("keyup", ({ keyCode }) => {
  switch (keyCode) {
    case 65:
      console.log("left");
      keys.left.pressed = false;
      break;
    case 83:
      console.log("down");
      break;
    case 68:
      console.log("right");
      keys.right.pressed = false;
      break;
    case 87:
      console.log("up");
      keys.up.pressed = false;
      break;
  }
});
