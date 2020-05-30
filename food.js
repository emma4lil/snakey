let mx = 1
let my = 1

function Food() {
    this.x = Math.floor(Math.random() * 40) * step
    this.y = Math.floor(Math.random() * 40) * step
    this.draw = function() {
        ctx.fillStyle = "red"
        ctx.fillRect(this.x, this.y, step, step)
        ctx.fill()
    }
    this.update = function() {
        this.draw()
    }
    this.newFood = function() {
        this.x = Math.floor(Math.random() * 35) * step
        this.y = Math.floor(Math.random() * 35) * step
    }

}