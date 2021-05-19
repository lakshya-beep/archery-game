class Box{
    constructor(x,y,w,h){
    
        var options={
            stiffness:1,
            restitution: 0.8

        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(myworld,this.body);

        this.w = w;
        this.h =h;
    }

    display(){
        var pos = this.body.position;
        push();
        fill("black");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w, this.h);
        push();
    }
}







