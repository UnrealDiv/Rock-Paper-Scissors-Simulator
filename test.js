let pos;
let countI = 15;
let countJ = 15;
let rockArray = [];
let paperArray = [];
// let scissorsArray = [];
function setup() {
  createCanvas(1500, 700);

  for(let i=0;i<countI;i++){
    rockArray[i] = new Rock(random(300,800),random(150,400));
    // scissorsArray[i] = new Scissors(random(500,800),random(150,450));
    // paperArray[i] = new Paper(random(500,800),random(150,450));
  }
  for(let i=0;i<countJ;i++){
    // rockArray[i] = new Rock(random(500,800),random(150,450));
    // scissorsArray[i] = new Scissors(random(500,800),random(150,450));
    paperArray[i] = new Paper(random(300,800),random(150,400));
  }
}
function check(obj1,obj2){
  let isIn ;
  let fp1 = obj2.position();
  let fp2 = obj1.position();
  const v1 = Math.floor(fp1.y);
  const h1 = Math.floor(fp1.x);
  const v2 = Math.floor(fp1.y+20);
  const h2 = Math.floor(fp1.x+20);
  

  if((v1>= fp2.y+20)){
    isIn = false;
  }else if(v2<=fp2.y){
    isIn = false;
  }
  else if(h2<=fp2.x){
    isIn = false;
  }else if(h1>=fp2.x+20){
    isIn = false;
  }else{
    isIn = true;
  }
  return isIn;
}
function draw() {
  background(0);
  let isIntersecting;
  rockArray.forEach(x=>{
    x.show();
    x.update();
  });
  // scissorsArray.forEach(x=>{
  //   x.show();
  //   x.update();
  // });
  paperArray.forEach(x=>{
    x.show();
    x.update();
  });
  for(let i=0;i<countI;i++){
    for(let j=0;j<countJ;j++){
      if(j< rockArray.length && j>=0){
      isIntersecting = check(paperArray[i],rockArray[j]);
      if(isIntersecting){
        console.log(rockArray.length);
        let info = rockArray[j];
        let m = rockArray.splice(j,1);
        console.log(m);
        paperArray.push(new Paper(info.x,info.y));
        countI++;
        
      }
    }
    }
  }
  

}
let rx1 = 100;
let rx2 = 300;
let ry1 = 100;
let ry2 = 300;
function setup() {
  createCanvas(400, 400);

  for(let i=0;i<countRock;i++){
    rockArray[i] = new Rock(random(rx1,rx2),random(ry1,ry2));
    // scissorsArray[i] = new Scissors(random(500,800),random(150,450));
    // paperArray[i] = new Paper(random(500,800),random(150,450));
  }
  for(let i=0;i<countPaper;i++){
    // rockArray[i] = new Rock(random(500,800),random(150,450));
    // scissorsArray[i] = new Scissors(random(500,800),random(150,450));
    paperArray[i] = new Paper(random(rx1,rx2),random(ry1,ry2));
  }
  for(let i=0;i<countScissors;i++){
    // rockArray[i] = new Rock(random(500,800),random(150,450));
    scissorsArray[i] = new Scissors(random(rx1,rx2),random(ry1,ry2));
    // paperArray[i] = new Paper(random(300,800),random(150,400));
  }
}

function setup() {
  createCanvas(1500, 1000);

  for(let i=0;i<countRock;i++){
    rockArray[i] = new Rock(random(400,600),random(200,400));
    // scissorsArray[i] = new Scissors(random(500,800),random(150,450));
    // paperArray[i] = new Paper(random(500,800),random(150,450));
  }
  for(let i=0;i<countPaper;i++){
    // rockArray[i] = new Rock(random(500,800),random(150,450));
    // scissorsArray[i] = new Scissors(random(500,800),random(150,450));
    paperArray[i] = new Paper(random(400,600),random(200,400));
  }
  for(let i=0;i<countScissors;i++){
    // rockArray[i] = new Rock(random(500,800),random(150,450));
    scissorsArray[i] = new Scissors(random(400,600),random(200,400));
    // paperArray[i] = new Paper(random(300,800),random(150,400));
  }
}