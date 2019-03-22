class Box extends Block{
    constructor(pos){
        super()

        this.pos = pos || {x: 0,y: 0}

        Object.assign(this.el.style, this.private,{zIndex: 4,opacity:0.8})

        this.el.style.background = `url(./images/box.png) center/70px 70px`

        this.setPos()
    }
}