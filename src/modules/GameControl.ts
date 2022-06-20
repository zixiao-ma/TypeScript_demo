import ScorePanel from "./ScorePanel";
import Snake from "./Snake";
import Food from "./Food";
//游戏控制器
class GameControl {
    food:Food;
    snake:Snake;
    scorePanel:ScorePanel;
    //储存按下的按键
    direction:string='';
    islive=true
    constructor() {
        this.food = new Food();
        this.snake = new Snake();
        this.scorePanel = new ScorePanel(10,1);
        this.init()

    }

    //开始游戏的方法
    init(){
        document.addEventListener('keydown',this.keydownHandler.bind(this))
        this.run()
    }
    /*
    * ArrowUp
       ArrowDown
    ArrowRight
    ArrowLeft
    *
    * */
    keydownHandler(event:KeyboardEvent){
        console.log(event.key)
        this.direction = event.key

    }
    run(){
        let X = this.snake.X;
        let Y = this.snake.Y;
        switch (this.direction) {
            case "ArrowUp":
                Y-=10;
                break;
            case "ArrowDown":
                Y+=10;
                break;
            case "ArrowRight":
                X+=10
                break;
            case "ArrowLeft":
                X-=10;
                break;
        }
       this.checkEat(X,Y)
       try {
           this.snake.X = X;
           this.snake.Y=Y;
         } catch (e) {
           // @ts-ignore
         alert(e.message)
           this.islive = false
           window.location.reload()

         }
       this.islive&& setTimeout(this.run.bind(this), 200-(this.scorePanel.level-1)*30);
    }
    checkEat(X:number,Y:number){
        if( X===this.food.X &&Y===this.food.Y){
            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody()}
    }



}
export default GameControl
