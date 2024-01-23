let snake = [],
  sx,
  sy,
  food,
  r = true,
  slider,
  val = 8,
  high = 0,
  score;

function setup() {
  createCanvas(800, 800);
  background(220);
  snake[0] = new Snake(400, 400);
  food = new Food(int(random(0, 40)) * 20, int(random(0, 40)) * 20);
  sx = 0;
  sy = 0;
  background(100);
  textSize(40);
  text("SNAKE", 325, 400);
  textSize(20);
  text("Press number to select level", 275, 500);
}

function draw() {
  if (r == false) {
    textSize(20);
    text("Score:" + snake.length, 100, 100);
    eatFood();
    noStroke();
    background(91,198,201);
    fill("rgb(48,97,17)");
    for (i = 0; i < snake.length; i++) {
      snake[i].display();
    }
    // edge boundary
    if (
      snake[0].x < 0 ||
      snake[0].x > 780 ||
      snake[0].y < 0 ||
      snake[0].y > 780
    ) {
      restart();
      noLoop();
    }
    for (i = 1; i < snake.length; i++) {
      if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
        restart();
        noLoop();
      }
    }
    snake[0].move();
    fill("red");
    food.display();
    text("Score:" + snake.length, 100, 100);
    text("High:" + high, 300, 100);
    text("level:" + lvl, 500, 100);
  }
}

function restart() {
  fill("white");
  rect(0, 0, 800);
  fill("black");
  stroke("black");
  textSize(30);
  score = snake.length;
  if (score > high) {
    high = score;
  }
  text("restart? Press Key", 400, 400);
  while (snake.length > 0) {
    snake.pop();
  }
  r = true;
}

function eatFood() {
  if (snake[0].x == food.x && snake[0].y == food.y) {
    food.x = int(random(0, 40)) * 20;
    food.y = int(random(0, 40)) * 20;
    for (i = 0; i < snake.length; i++) {
      if (food.x == snake[i].x && food.y == snake[i].y) {
        food.x = int(random(0, 40)) * 20;
        food.y = int(random(0, 40)) * 20;
      }
    }
    snake.unshift(
      new Snake(snake[0].x + sx, snake[0].y + sy, snake[0].xSpd, snake[0].ySpd)
    );
  }
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    if (sx != -20) {
      sx = 20;
      sy = 0;
    }
  } else if (keyCode == LEFT_ARROW) {
    if (sx != 20) {
      sx = -20;
      sy = 0;
    }
  } else if (keyCode == DOWN_ARROW) {
    if (sy != -20) {
      sx = 0;
      sy = 20;
    }
  } else if (keyCode == UP_ARROW) {
    if (sy != 20) {
      sx = 0;
      sy = -20;
    }
  } else if (keyCode == 48) {
    frameRate(3);
    lvl = 0;
  } else if (keyCode == 49) {
    frameRate(6);
    lvl = 1;
  } else if (keyCode == 50) {
    frameRate(10);
    lvl = 2;
  } else if (keyCode == 51) {
    frameRate(12);
    lvl = 3;
  } else if (keyCode == 52) {
    frameRate(14);
    lvl = 4;
  } else if (keyCode == 53) {
    frameRate(15);
    lvl = 5;
  } else if (keyCode == 54) {
    frameRate(18);
    lvl = 6;
  } else if (keyCode == 55) {
    frameRate(22);
    lvl = 7;
  } else if (keyCode == 56) {
    frameRate(25);
    lvl = 8;
  } else if (keyCode == 57) {
    frameRate(30);
    lvl = 9;
  }

  if (r == true) {
    setup();
    r = false;
    loop();
  }
}

class Snake {
  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
  }

  display() {
    rect(this.x, this.y, 20);
  }
  move() {
    snake.unshift(new Snake(snake[0].x + sx, snake[0].y + sy));
    snake.pop();
  }
}

class Food {
  constructor(_x, _y) {
    this.x = _x;
    this.y = _y;
  }

  display() {
    rect(this.x, this.y, 20);
  }
}
