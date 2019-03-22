class Person extends Block{
    constructor(pos){
        super()
        this.pos = pos || {x: 0,y: 0}

        Object.assign(this.el.style,this.private,{zIndex: 5})
        
        this.direction = "bottom"
        this.el.style.background =`url("./images/player_${this.direction}.png") center/70px 70px`
        this.setPos()
    }
    changedirection(yd){
        if(yd.x === 1){
            this.direction = "right"
        }
        if(yd.x === -1){
            this.direction = "left"
        }
        if(yd.y === 1){
            this.direction = "bottom"
        }
        if(yd.y === -1){
            this.direction = "top"
        }
        
    }
    walk(){
        let nowDate = new Date()
        let steps = 0
        let playList = ["_walk1","_walk2","_walk3"]
        function run(){
            steps++
            this.el.style.background=`url(./images/player_${this.direction}${playList[steps%2]}.png) center/70px 70px`
            if(new Date() - nowDate < 300){
                setTimeout(()=>{
                    run.call(this)
                },100)
            }
        }
        run.call(this)
    }
    move(yd){
        this.changedirection(yd)
        this.walk()
        if(!this.canmove) return
        this.canmove = false
        setTimeout(()=>{
            this.el.style.background = `url(./images/player_${this.direction}.png)center/70px 70px`

            this.canmove = true
        },300) 
        this.pos.x +=yd.x
        this.pos.y +=yd.y
        this.setPos()
    }
}