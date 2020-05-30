console.log('Running...snakey');
let width
let height

let ctx
let world
let snake
let food

let up
let down
let right
let left

let detector

function resizeCanvas() {
    setTimeout(function() {
        width = window.innerWidth;
        height = window.innerHeight * 0.5;
        canvas.width = width;
        canvas.height = height;
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
        mouseX = canvas.width / 2;
        mouseY = canvas.height * 0.8;
        //ctx.globalCompositeOperation = "lighter"
    }, 0);
}




function init() {
    let canvas = document.getElementById("canvas")
    ctx = canvas.getContext("2d")
    resizeCanvas()
    //ctx.globalCompositeOperation = "xor"

    world = new World()
    snake = new Snake()
    food = new Food()
    detector = new collisionDetector()

    up = document.getElementById('up')
    up.onclick = function() {
        snake.up()
    }

    down = document.getElementById('down')
    down.onclick = function() {
        snake.down()
    }

    left = document.getElementById('left')
    left.onclick = function() {
        snake.left()
    }

    right = document.getElementById('right')
    right.onclick = function() {
        snake.right()
    }


}

function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, width, height)

    world.update()
    snake.update()
    food.update()
    detector.entity = snake
    detector.world = world
    detector.food = food
    detector.update()
    
    
    ctx.font = "12px Arial";
    ctx.fillText("head: x:" + snake.head.x + ' y:' + snake.head.y, 2, 10);
    ctx.font = "12px Arial";
    ctx.fillText("score:" + world.lifeSpan, 2, 20);
    
    ctx.font = "15px Arial";
    ctx.fillText("life:" + snake.life, 2, 50);



}

init()
animate()