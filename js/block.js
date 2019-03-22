class Block{
    constructor(){
        this.el = document.createElement("div")

        this.private={
            position:"absolute",
            width: "70px",
            height: "70px",
        }
        this.canmove = true
        
    }
    move(yd){
        if(!this.canmove) return
        this.canmove = false
        setTimeout(()=>{
            this.canmove = true
        },500) 
        this.pos.x +=yd.x
        this.pos.y +=yd.y
        this.setPos()
    }
    setPos(pos){
        if(pos) this.pos = pos
        this.el.style.left= this.pos.x*70+"px"
        this.el.style.top= this.pos.y*70+"px"
    }
    addTo(target){
        target.appendChild(this.el)
    }
}