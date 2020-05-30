function collisionDetector() {
    this.subscribers = []
    this.entity = []
    this.world
    this.food


    this.update = function() {
        this.entity.lockNodes.forEach(node => {
            if (!node.isHead) {
                if (this.entity.head.x == node.x && this.entity.head.y == node.y) {
                    this.hit(node)
                } else {
                    this.noHit()
                }
            }
        })
        
        if (this.entity.head.x == food.x && this.entity.head.y == food.y){
            this.entity.eat()
            this.food.newFood()
        }

    }

    this.hit = function() {
        this.entity.life--
        this.world.color = "red"
        
       
        const self = this

        let t = setTimeout(function() {
            self.world.color = 'yellow'
        }, 100)
        
    }
    this.noHit = function() {
        //this.world.color = 'black'
    }
}