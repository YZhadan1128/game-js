class History{
    constructor(){
        this.historyList = []
    }
    addrecord(map){
        
        let json = JSON.parse(JSON.stringify(map.json))

        this.historyList.push(json)
    }
    cancel(){ 
        if(this.historyList.length===1) return
        this.historyList.pop()
    }
    
    getHistory(){
        return this.historyList[this.historyList.length-1]
    }
}