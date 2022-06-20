class ScorePanel {
    score = 0;
    level=1;
    //最大等级
    maxLevel:number;
    //每几分升一级
    upScore:number;
    scoreEle:HTMLElement;
    levelEle:HTMLElement;
    constructor(maxLevel:number=10,unScore:number=10) {
        this.scoreEle = document.querySelector('#score')!;
        this.levelEle = document.querySelector('#level')!;
        this.maxLevel = maxLevel;
        this.upScore = unScore
    }
    addScore(){
        this.scoreEle.innerHTML = ++this.score+'';
        if(this.score% this.upScore===0){
            this.levelUp()
        }
    }
    levelUp(){
        if(this.level<this.maxLevel){
            this.levelEle.innerHTML=++this.level+''
        }
    }
}
export default ScorePanel
