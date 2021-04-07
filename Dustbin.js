class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic: true,
        }
        this.image=loadImage("Dustbin.png")
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        rectMode(CENTER);
        fill(255);
        image(this.image,610,605,120,130   )
        //rect(this.body.position.x, this.body.position.y , this.width, this.height);
    }
}