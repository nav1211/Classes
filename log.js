class Log{

    constructor(x,y,height,angle){

        var options={
            restitution:1.2,
            friction:1.2,
            density:1.2
        }

        this.body = Bodies.rectangle(x,y,20,height,options);
        Matter.Body.setAngle(this.body, angle);
        this.width = 20;
        this.height = height;

        World.add(world,this.body);

    }

    

}