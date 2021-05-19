class Line1{
    constructor(x,y,w,h){
    var option={
        isStatic: false,
        friction: 1,
frictionAir: 0.1
        }

        this.body=Bodies.rectangle(x,y,w,h,option);
        World.add(myworld,this.body);
        this.w = w;
        this.h =h;
        this.Visiblity = 255;
        //this.image = null;

        var ran = Math.round(random(1,3));
        if(ran === 1){
            this.image = loadImage("enemy1.png");
        }
        else if (ran === 2){
            this.image = loadImage("enemy2.png")
        }    
        else{this.image = loadImage("enemy3.png");;
        }
        
    }

    display(){

    if(this.body.speed > 2.8){    
    var pos = this.body.position;
    var angle = this.body.angle;

   console.log(this.body.speed)
        
    push();
        translate(pos.x,pos.y);
        rotate(angle);
        stroke(178,193,112);
        strokeWeight(2);
        fill(163,104,175);
        imageMode(CENTER);
        image(this.image,0,0,this.w,this.h);
    pop();}

    else{
        World.remove(myworld, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.visibility);
        image(this.image, this.body.position.x, this.body.position.y, this.w,this.h);
        pop();
      }

    };
}




