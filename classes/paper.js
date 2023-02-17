class Paper{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    show(){
        image(paperImg,this.x,this.y,20,20);
    }
    update(){
        this.x += random(-4,4); 
        this.y += random(-4,4);

        this.x = constrain(this.x,300,800);
        this.y = constrain(this.y,100,500);
    }
    position(){
        return createVector(this.x,this.y);
      }
}