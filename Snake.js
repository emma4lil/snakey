let id = 0
let step = 10
let size = 10
let speed = 1
let isMoving = false
let tick = 0


let px
let py

function Snake() {
    this.lockNodes = []
    this.life = 100
    this.head = new Node(true)
    this.direction = function() {}

    this.init = function() {
        this.lockNodes.push(this.head)
        this.lockNodes.push(new Node())
        this.lockNodes.push(new Node())



    }
    this.init()

    // inherent methods 
    this.draw = function() {

        this.lockNodes.forEach(lock => {
            if (isMoving) {
                if (lock.isHead) {


                    lock.draw()

                } else {
                    let tx = lock.x
                    let ty = lock.y

                    lock.x = px
                    lock.y = py

                    px = tx
                    py = ty
                    lock.draw()
                }
                //console.log(lock.x, lock.y)

            } else {
                lock.draw()
            }
        })
        isMoving = false
    }
    this.update = function() {
        this.draw()
        if ((tick % 15) == 0) {
            this.direction()

        }
        tick++
        //console.log(tick);

        if (this.head.x <= 0) {
            this.head.x = width
        } else if (this.head.x >= width) {
            this.head.x = 0
        }

        if (this.head.y <= 0) {
            this.head.y = height
        } else if (this.head.y >= height) {
            this.head.y = 0
        }
    }

    //directions 
    this.up = function() {
        isMoving = true
        px = this.head.x
        py = this.head.y
        this.head.y -= step * speed
        this.direction = this.up

    }
    this.down = function() {
        isMoving = true
        px = this.head.x
        py = this.head.y
        this.head.y += step * speed
        this.direction = this.down

    }
    this.left = function() {
        isMoving = true
        px = this.head.x
        py = this.head.y
        this.head.x -= step * speed
        this.direction = this.left


    }
    this.right = function() {
        isMoving = true
        px = this.head.x
        py = this.head.y
        this.head.x += step * speed
        this.direction = this.right

    }

    // behaviors
    this.eat = function() {
        this.lockNodes.push(new Node())
    }
    this.die = function() {}
    this.grow = function() {}
}


function Node(ishead) {
    this.isHead = ishead || false
    this.id = (id += 1)
    this.color = "blue"
    this.x = 200 - (step * this.id)
    this.y = 200

    if (this.isHead) {
        this.color = 'orange'
    }
    this.draw = function() {
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, step - 1, step - 1)
        ctx.fill()

    }


}