class Ground{
    constructor(x,y,w,h){
    
        var o= {
            isStatic : true
        }
        
        this.body = Bodies.rectangle(x,y,w,h,o);
        World.add(myworld,this.body);

        this.w = w;
        this.h =h;
    }

    display(){
        var pos = this.body.position;

        fill("brown");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w, this.h);
    }
}



