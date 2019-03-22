class Game{
    constructor(str){
        this.gamearea  = document.querySelector(str)
        this.gamearea.style.background=`url("./images/land.png") center/70px 70px`
        this.gamearea.style.zIndez="10"
        this.keypath={
            arrowup : {x:0,y:-1},
            arrowright : {x:1,y:0},
            arrowdown : {x:0,y:1},
            arrowleft : {x:-1,y:0},
        }
        this.section1()

    }
    section1(lev = 0){
        this.gamearea.innerHTML = ""
        this.map = new Map(map1[lev])
        this.map.addTo(this.gamearea)
        this.person = this.map.person
        this.history = new History()
        this.history.addrecord(this.map) 
        
        this.register()
    }
    section2(lev = 1){
        this.gamearea.innerHTML = null
        this.map = new Map(map1[lev])
        this.map.addTo(this.gamearea)
        this.person = this.map.person
        
        this.history = new History()
        this.history.addrecord(this.map) 
        this.register()
    }
    section3(lev = 2){
        this.gamearea.innerHTML = "哟哟哟"
        this.map = new Map(map1[lev])
        this.map.addTo(this.gamearea)
        this.person = this.map.person
        
        this.history = new History()
        this.history.addrecord(this.map) 
        this.register()
    }
    section4(){
        this.register4()
    }
    register4(){
        this.editType = "box"
        this.personalJson = {
            person: {x: 0,y: 0},
            wall: [],
            box: [],
            winpoint: [],
        }
        this.gamearea.addEventListener("click", (e) => {
            if(e.target.id !== "game") return
            let pos ={x:Math.floor(e.offsetX/70), y:Math.floor(e.offsetY/70)}
            this.personalJson[this.editType].push(pos)
            this.map = new Map(this.personalJson)
            this.map.addTo(this.gamearea)
        })
    }
    register(){
        window.addEventListener("keydown",(e)=>{
            let yd = this.keypath[e.key.toLowerCase()]
            // console.log(e.key.toLowerCase())
            if(yd){
                this.map.move(yd)
                //this.person.move(yd)
                if(this.map.win){
                    confirm("还玩吗弟弟,沙比居然赢了,你这智商可以说是很棒棒哦")
                    // this.section2()
                    setTimeout(this.section2(),500)
                    if(this.map.win){
                        confirm("还玩吗弟弟,沙比居然赢了,你这智商可以说是很棒棒哦")
                        // this.section2()
                        setTimeout(this.section2(),500)
                    }
                }
            }
        window.addEventListener("keydown",(e)=>{ //撤回一步
            // e.preventDefault()
            if(e.ctrlKey && e.code.toLowerCase() =="keyz"){
                
                this.history.cancel()

                // console.log(this.history.cancel())
                let json = this.history.getHistory()
                
                this.map.render(json)
            }
        })
            
        })
    }
}