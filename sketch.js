let pos;

let rockArray = [];
let paperArray = [];
let scissorsArray = [];
let sliderCount ;
let countRock ;
let countPaper ;
let countScissors ;

function setup() {
  createCanvas(1500, 700);
  sliderCount = createSlider(30, 30, 1);
  sliderCount.position(1300, 10);
  sliderCount.style('width', '80px');
  countRock= sliderCount.value();
  countPaper= sliderCount.value();
  countScissors= sliderCount.value();
  for(let i=0;i<countRock;i++){
    rockArray[i] = new Rock(random(450,700),random(150,500));
    // scissorsArray[i] = new Scissors(random(500,800),random(150,450));
    // paperArray[i] = new Paper(random(500,800),random(150,450));
  }
  for(let i=0;i<countPaper;i++){
    // rockArray[i] = new Rock(random(500,800),random(150,450));
    // scissorsArray[i] = new Scissors(random(500,800),random(150,450));
    paperArray[i] = new Paper(random(450,700),random(150,500));
  }
  for(let i=0;i<countScissors;i++){
    // rockArray[i] = new Rock(random(500,800),random(150,450));
    scissorsArray[i] = new Scissors(random(450,700),random(150,500));
    // paperArray[i] = new Paper(random(300,800),random(150,400));
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
  let isIntersectingRP;
  let isIntersectingPS;
  let isIntersectingSR;
  rockArray.forEach(x=>{
    x.show();
    x.update();
  });
  scissorsArray.forEach(x=>{
    x.show();
    x.update();
  });
  paperArray.forEach(x=>{
    x.show();
    x.update();
  });
    for(let i=0;i<paperArray.length;i++){
  for(let j=0;j<rockArray.length;j++){
    isIntersectingRP = check(paperArray[i],rockArray[j]);
    if(isIntersectingRP){
      let info = rockArray[j];
      let m = rockArray.splice(j,1);
      paperArray.push(new Paper(info.x,info.y));
    }
  }
}
for(let i=0;i<rockArray.length;i++){
  for(let j=0;j<scissorsArray.length;j++){

    isIntersectingSR = check(rockArray[i],scissorsArray[j]);
    if(isIntersectingSR){
      let info = scissorsArray[j];
      let m = scissorsArray.splice(j,1);
      rockArray.push(new Rock(info.x,info.y));
    }

  }
}
for(let i=0;i<scissorsArray.length;i++){
  for(let j=0;j<paperArray.length;j++){
    isIntersectingPS = check(scissorsArray[i],paperArray[j]);
    if(isIntersectingPS){
      let info = paperArray[j];
      let m = paperArray.splice(j,1);
      scissorsArray.push(new Scissors(info.x,info.y));
    }
  }
}
}


