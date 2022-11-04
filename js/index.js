
  const canvas = document.querySelector('#canvas');
  const ctx = canvas.getContext('2d');

 let gameBoard = new Image();
 
 let car = new Image();

 


 gameBoard.src = 'images/road.png'
 car.src = 'images/car.png'


 
 class Car {
  constructor(x,y,width,height){
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }

  moveLeft(){
    this.x -= 10;
  }

  moveRight(){
    this.x += 10;
  }

drawCar (){
  ctx.drawImage(car,this.x,this.y, this.width,this.height)
}
 }

 class Obstacle {
  constructor(x,y,width,height){
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }

  moveDown (){
    this.y += 2
  }

drawObstacle (){
  ctx.fillRect(this.x,this.y,this.width,this.height)
}
 }


 let player = new Car(240, 600, 40, 60)







window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };



  window.addEventListener('keydown', function(event){

    switch(event.code){
        case "ArrowLeft":
            player.moveLeft();
            break
        case "ArrowRight":
            player.moveRight();
            break
    }
  });


  let frameCount = 0
  let score = 0
  let obstacleArr = []

  function startGame(){  
    setInterval(animationLoop,16)
  }
  const animationLoop = () => {

    frameCount++
    if (obstacleArr > canvas.height){
      score ++
    }

    

      
      ctx.drawImage(gameBoard,0, 0, canvas.width,canvas.height);
      
      player.drawCar()


      if (frameCount % 100 === 0){
        let randomWidth = Math.random() * 250 + 50
        
        obstacleArr.push(new Obstacle(Math.random() * (canvas.width - randomWidth),0,randomWidth,30));
      
      }

      
        
      for (let i = 0; i < obstacleArr.length; i++){

        obstacleArr[i].moveDown();
        obstacleArr[i].drawObstacle();
    }


  }
}
