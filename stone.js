class Stone{
    constructor(x,y,r)
    {
    var options={
        isStatic: true,
        restitution:0,
        friction:1
    }
    
    
    
    this.body = Bodies.circle(x, y,r, options);
          this.r=r;
         
         // World.add(world, this.body);
          this.image = loadImage("stone.png");
        };
    
        
    
        
        display(){
          var pos = this.body.position;
       
      
      
          push();
          translate(pos.x, pos.y);
          rotate(this.body.angle)
          ellipseMode(RADIUS)
          ellipse(0,0,this.r)
          imageMode(CENTER);
          image(this.image, 0, 0,this.r);
         pop();
        };
      
    
      }
    