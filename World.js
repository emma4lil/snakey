
function World() {
    this.color = "yellow"
    this.tick = 0
    this.lifeSpan = 0
    
    this.draw = function() {
        ctx.fillStyle = this.color
        ctx.fillRect(0, 0, width, height)
        ctx.fill()
    }
    this.update = function() {
        this.draw()
        this.upSscore()
    }
    this.upSscore = function (){
        if (this.tick % 20 == 0) {
            this.lifeSpan++
        }
        this.tick++
    } 
}