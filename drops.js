class CreateDrops
{
    constructor(x, y)
    {
        var options=
        {
            isStatic: false,
            friction:0.1,
            density:1.0,
        }
        this.rain = Bodies.circle(x, y, 5, options)
        this.radius = 5
        World.add(world,this.rain);

    }
    display()
    {
        
        push();
        translate(this.rain.position.x, this.rain.position.y);
        rotate()
        ellipseMode(RADIUS);
        this.scale = 1.5;
        ellipse(0, 0, 5);
        pop();
    }

    update()
    {
        if(this.rain.position.y > height)
        {
            Matter.Body.setPosition(this.rain, {x:random(0,400), y:random(0,400)})
        }
    }
    
}