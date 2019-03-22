class Map{
    constructor(json){
        this.json = json
        this.person = new Person(json.person)
        this.createWall()
        this.createBox()
        this.createwinPoint()
       
        this.win = false
        
    }
    createWall(){
        this.wallList= []
        this.json.wall.forEach((el)=>{
            // console.log(el)
            this.wallList.push(new Wall(el))
        })
        
        
    }
    createBox(){
        this.boxList = []
        this.json.box.forEach(el => {
            this.boxList.push(new Box(el))
        })
    }
    createwinPoint(){
        this.winpointList = []
        this.json.winpoint.forEach(el=>{
            this.winpointList.push(new WinPoint(el))
        })
    }
    addTo(target){
        this.person.addTo(target)

        this.wallList.forEach(i=>{
            i.addTo(target)
        })
        this.boxList.forEach(i=>{
            i.addTo(target)
        })
        this.winpointList.forEach(i=>{
            i.addTo(target)
        })
    }
    hasblock(type,pos){
        return type.some(i=> i.pos.x === pos.x && i.pos.y === pos.y)

    }
    getblock(type, pos){
        let temp = null
        
        type.some(i => i.pos.x === pos.x && i.pos.y === pos.y && (temp = i))

        return temp
    }
    
    checkwin(){
        this.win = this.winpointList.every(i=>{
            return this.hasblock(this.boxList,i.pos)
        })
    }
    render(json){
        this.json = JSON.parse(JSON.stringify(json))
        this.person.setPos(this.json.person)
        this.boxList.forEach((i,j)=>{
            i.setPos(this.json.box[j])
        })
        
    }
    move(yd){
        
        let current = this.person.pos
        let targetPlace = {
            x: current.x + yd.x,
            y: current.y + yd.y
        }
        let backPlace = {
            x: targetPlace.x+ yd.x,
            y: targetPlace.y+ yd.y,
        }
        if( this.hasblock(this.wallList,targetPlace)){
            let bool = confirm("臭弟弟会玩游戏吗推你🐴的臭嗨啊,他娘的看到这种情况你以为是bug?是老子要让你充钱,充钱懂吗,充完钱之后就能正常开始游戏了,臭弟弟,什么我和网易一样?开玩笑,论骗氪,这时候网易得让你冲一百万,我这里只要10块,冲了十块钱,你能直接冲墙,把墙碾碎")
            if(!bool){
                close()
            }
        }
        let bool = this.hasblock(this.boxList, backPlace) || this.hasblock(this.wallList, backPlace)
        
        if( this.hasblock(this.boxList, targetPlace) && (!bool)){    
            this.getblock(this.boxList, targetPlace).move(yd)
            this.person.move(yd)
           
        }else{
           if(this.hasblock(this.boxList, targetPlace)){
                return
           }else{
                this.person.move(yd)
           }
        }
        this.checkwin()

    }
    
}