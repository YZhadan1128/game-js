class WinPoint extends Block{
    constructor(pos){
        super()
        this.pos = pos || {x: 0,y: 0}

        Object.assign(this.el.style, this.private)

        this.el.style.background = `url(./images/win_point.png) center/70px 70px`

        this.setPos()
    }

}